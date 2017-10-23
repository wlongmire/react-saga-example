import { ChatMessageContent } from './chat-message-content';

export interface ChatMessage {
    channel_id: number;
    sequence_number?: number;
    event_id: string;
    recorded?: Date;
    user_id: number;
    event_type: string;
    version_major: number;
    version_minor: number;
    payload: ChatMessageContent;
}