import { ChannelEventMessage } from './channel-event-message';
import { ChatMessage } from './chat-message';

export class ChatState {
    isConnecting: boolean;
    isConnected: boolean;
    outboundMessages: Object;
    messages: Array<ChannelEventMessage<ChatMessage>>;
    connectionError?: any;
}