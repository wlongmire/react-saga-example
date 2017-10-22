import * as _ from 'lodash';
import * as Actions from './actions';
import { ActionResult, ChatChannelInfo, ChatMessage, ChatState } from '../common';

function initialState(): ChatState {
    return {
        isConnecting: false,
        isConnected: false,
        outboundMessages: {},
        channels: {}
    }
}

export default function reducer(state = initialState(), action: ActionResult<{}>) {
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

        case Actions.ActionType.MESSAGE_RECEIVED: {
            // get the message
            const message = action.value as ChatMessage;
            const outbound = _.cloneDeep(state.outboundMessages);

            // was this message pending
            if (_.hasIn(outbound, message.event_id)) {
                delete outbound[message.event_id];
            }

            // get the channel id
            const channelId = message.channel_id;

            // ensure this is a chat_related message (add accepted event types here!)
            // refactor todo: (break this down more in the saga to dispatch specific types of events based on the message type(s)...)
            if (['chat_message'].indexOf(message.event_type) == -1) {
                return state;
            }

            // get the channels
            const { channels } = state;
            const clonedChannels = _.cloneDeep(channels);

            // create the channel if necessary
            if (!_.hasIn(clonedChannels, channelId)) {
                clonedChannels[channelId] = {
                    channelId, 
                    messages: [], 
                    unreadMessages: []
                } as ChatChannelInfo;
            }

            // get the channel
            const channel = _.cloneDeep(clonedChannels[channelId]);

            // get the channel messages
            const { messages } = channel;

            // index of existing message in list
            let index = _.findIndex(messages, (m: ChatMessage) => {
                return m.event_id == message.event_id;
            });

            // replace if it exists otherwise append it
            if (index > -1) {
                messages.splice(index, 1, message);
            } else {
                messages.push(message);
            }

            // add to the unread messages list
            const { unreadMessages } = channel;
            if (unreadMessages.indexOf(message.event_id)) {
                unreadMessages.push(message.event_id);
            }

            clonedChannels[channelId] = channel;
            
            // update the messages
            return { ...state, channels: clonedChannels, outboundMessages: outbound };
        }

        case Actions.ActionType.MESSAGE_SEND:
            const msg = action.value as ChatMessage;
            
            if (_.hasIn(state.outboundMessages, msg.event_id)) 
                return state;

            const outbound = _.cloneDeep(state.outboundMessages);
            outbound[msg.event_id] = msg;
            
            return { ...state, outboundMessages: outbound }

        default:
            return state;
    }
}