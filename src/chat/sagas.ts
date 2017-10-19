import { eventChannel } from 'redux-saga';
import { all, call, put, fork, take, cancel, cancelled, takeEvery } from 'redux-saga/effects';
import { ChatMessage } from './reducer';
import * as Actions from './actions';
import { ActionResult } from '../common';
import { getAuthToken } from '../utils/auth-util';

let ws: WebSocket;

function parseMessage(data:any ): ChatMessage {
    return JSON.parse(data) as ChatMessage;
}

function initWebsocket() {
    
    return eventChannel(emitter => {
        
        const token = getAuthToken();
        ws = new WebSocket(`${process.env.REACT_APP_SOCKET_HOST}`, token || '');

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
                return emitter(Actions.messageReceived(msg));
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

function* onMessageSend(action: ActionResult<ChatMessage>) {
    try {
        if (!action.value) {
            throw new Error('action is missing required LoginCredentials value');
        }
        const message = action.value as ChatMessage;
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