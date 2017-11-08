import { eventChannel } from 'redux-saga';
import { all, call, put, fork, take, cancel, cancelled, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import * as _ from 'lodash';
import { ActionResult, ChannelEventMessage } from '../common';
import { getAuthToken } from '../auth/util';

let ws: WebSocket;

function parseMessage(data:any ): ChannelEventMessage<any> {
    return JSON.parse(data) as ChannelEventMessage<any>;
}

function initWebsocket() {
    
    return eventChannel(emitter => {
        
        const token = getAuthToken();
        ws = new WebSocket(`${process.env.REACT_APP_SOCKET_HOST}`, token || '');
        let messageQueue: Array<ChannelEventMessage<any>> = [];

        const dispatchMessages = () => {
            let cloned = _.cloneDeep(messageQueue);
            messageQueue = [];
            return emitter(Actions.messagesReceived(cloned));
        };

        const debounced = _.debounce(dispatchMessages, 300);

        ws.onopen = () => {
            return emitter(Actions.socketOpened());
        }

        ws.onerror = (error) => {
            console.dir(error);
            return emitter(Actions.socketError(error))
        }

        ws.onmessage = (e) => {
            let msg = null;

            try {
                msg = parseMessage(e.data);
            } catch (e) {
                console.error(`Error parsing : ${e.data}`)
            }

            if (msg) {
                messageQueue.push(msg);
                return debounced();
            }
        }

        return () => {
            return emitter(Actions.socketClosed());
        }
    })
}

function* connect() {
    const channel = yield call(initWebsocket);
    try {
        while (true) {
            const action = yield take(channel);
            yield put(action);
        }
    } finally {
        if (yield cancelled()) {
            channel.close();
        }
    }
}

function* subscribe(action: ActionResult<{}>) {
    while (true) {
        const connectTask = yield fork(connect);
        yield take(Actions.ActionType.SOCKET_DISCONNECT);
        yield cancel(connectTask)
    }
}

function* onMessageSend(action: ActionResult<ChannelEventMessage<any>>) {
    try {
        if (!action.value) {
            throw new Error('action is missing required ChatMessage value');
        }
        const message = action.value as ChannelEventMessage<any>;
        if (!ws) {
            yield(put(Actions.messageSendFail(new Error('Websocket is not connected.'))));
        } else {
            ws.send(JSON.stringify(message));
        }
        yield(put(Actions.messageSendSuccess(message)));
    } catch (e) {
        yield(put(Actions.messageSendFail(e)));
    }
}

function* watchForSubscribe() {
    yield takeEvery(Actions.ActionType.SOCKET_CONNECT, subscribe);
}

function* watchForMessageSend() {
    yield takeEvery(Actions.ActionType.MESSAGE_SEND, onMessageSend);
}

export default function* root() {
    yield all([
        fork(watchForSubscribe),
        fork(watchForMessageSend)
    ])
}