import * as _ from 'lodash';
import * as Actions from './actions';
import { ActionResult, ChannelEventMessage, ChannelEventMessageRequest, ChatState } from '../common';

function initialState(): ChatState {
    return {
        isConnecting: false,
        isConnected: false,
        outboundMessages: {},
        messages: []
    };
}

export default function reducer(state: ChatState = initialState(), action: ActionResult<{}>) {
    switch (action.type) {
        
        case Actions.ActionType.SOCKET_CONNECT:
            return { ...state, isConnecting: true };

        case Actions.ActionType.SOCKET_CONNECTING:
            return { ...state, isConnecting: true };

        case Actions.ActionType.SOCKET_OPENED:
            return { ...state, isConnecting: false, isConnected: true, connectionError: undefined };

        case Actions.ActionType.SOCKET_CLOSED:
            return { ...state, isConnecting: false, isConnected: false };

        case Actions.ActionType.SOCKET_ERROR:
            return { ...state, isConnecting: false, isConnected: false, connectionError: action.value };

        case Actions.ActionType.MESSAGES_RECEIVED: {
            const newMessages = action.value as Array<ChannelEventMessage<any>>;
            const pending = _.cloneDeep(state.outboundMessages);
            let filtered = newMessages.filter((newMessage) => {
                if (['chat_message'].indexOf(newMessage.event_type) > -1) {
                    if (_.hasIn(pending, newMessage.event_id)) {
                        delete pending[newMessage.event_id];
                    }
                    return true;
                }
                return false;
            });

            let messages = _.cloneDeep(state.messages);

            filtered.forEach((message) => {
                let index = messages.findIndex((m) => m.event_id === message.event_id);
                if (index > -1) {
                    messages.splice(index, 1, message);
                } else {
                    messages.push(message);
                }
            });
            return { ...state, messages: messages, outboundMessages: pending };
        }

        case Actions.ActionType.MESSAGE_SEND:
            const msg = action.value as ChannelEventMessageRequest<any>;
            
            if (_.hasIn(state.outboundMessages, msg.event_id)) {
                return state;
            }
            
            return { ...state, outboundMessages: {
                ...state.outboundMessages,
                [msg.event_id]: msg
            } };

        default:
            return state;
    }
}