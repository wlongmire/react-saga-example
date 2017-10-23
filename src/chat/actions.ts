import { ActionResult, ChatMessage } from '../common';

export module ActionType {
    export const MESSAGE_RECEIVED = 'chat/MESSAGE_RECEIVED';
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

export const messageReceived = (message: ChatMessage): ActionResult<ChatMessage> => {
    return {
        type: ActionType.MESSAGE_RECEIVED,
        value: message
    }
}

export const messageSend = (message: ChatMessage): ActionResult<ChatMessage> => {
    return {
        type: ActionType.MESSAGE_SEND,
        value: message
    }
}

export const messageSendSuccess = (message: ChatMessage): ActionResult<ChatMessage> => {
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