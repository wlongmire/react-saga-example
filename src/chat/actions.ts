import { ActionResult } from '../common';
import { ChannelEventMessage } from '../common';

export module ActionType {
    export const MESSAGES_RECEIVED = 'chat/MESSAGES_RECEIVED';
    export const SOCKET_CONNECT = 'chat/SOCKET_CONNECT';
    export const SOCKET_OPENED = 'chat/SOCKET_CONNECTED';
    export const SOCKET_CLOSED = 'chat/SOCKET_CLOSED';
    export const SOCKET_CONNECTING = 'chat/SOCKET_CONNECTING';
    export const SOCKET_ERROR = 'chat/SOCKET_ERROR';
    export const SOCKET_DISCONNECT = 'chat/SOCKET_DISCONNECT';
    export const MESSAGE_SEND = 'chat/MESSAGE_SEND';
    export const MESSAGE_SEND_SUCCESS = 'chat/MESSAGE_SEND_SUCCESS';
    export const MESSAGE_SEND_FAIL = 'chat/MESSAGE_SEND_FAIL';
}

export const socketConnect = (): ActionResult<{}> => {
    return {
        type: ActionType.SOCKET_CONNECT
    }
}

export const socketDisconect = (): ActionResult<{}> => {
    return {
        type: ActionType.SOCKET_DISCONNECT
    }
}

export const socketConnecting = (): ActionResult<{}> => {
    return {
        type: ActionType.SOCKET_CONNECTING
    }
}

export const socketError = (e: Event): ActionResult<Event> => {
    return {
        type: ActionType.SOCKET_ERROR,
        value: e
    }
}

export const socketOpened = (): ActionResult<{}> => {
    return {
        type: ActionType.SOCKET_OPENED
    }
}

export const socketClosed = (): ActionResult<{}> => {
    return {
        type: ActionType.SOCKET_CLOSED
    }
}

export const messagesReceived = (messages: Array<ChannelEventMessage<any>>): ActionResult<Array<ChannelEventMessage<any>>> => {
    return {
        type: ActionType.MESSAGES_RECEIVED,
        value: messages
    }
}

export const messageSend = (message: ChannelEventMessage<any>): ActionResult<ChannelEventMessage<any>> => {
    return {
        type: ActionType.MESSAGE_SEND,
        value: message
    }
}

export const messageSendSuccess = (message: ChannelEventMessage<any>): ActionResult<ChannelEventMessage<any>> => {
    return {
        type: ActionType.MESSAGE_SEND_SUCCESS,
        value: message
    }
}

export const messageSendFail = (e: Error): ActionResult<Error> => {
    return { 
        type: ActionType.MESSAGE_SEND_FAIL,
        value: e
    }
}