import { ChatMessage } from './chat-message';

export interface ChatChannelInfo {
    channelId: number;
    messages: Array<ChatMessage>;
    unreadMessages: Array<string>;
}