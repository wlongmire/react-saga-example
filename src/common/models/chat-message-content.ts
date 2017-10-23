import { ChatMessageSender } from './chat-message-sender';

export interface ChatMessageContent {
    content_text?: string;
    content_type: string;
    content_id?: string;
    content_uri?: string;
    content_preview_uri?: string;
    content_action_uri?: string;
    sender_meta: ChatMessageSender;
}