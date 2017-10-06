export interface AvatarUrl {
    url: string;
}

export interface AvatarUrls {
    ios?: AvatarUrl;
    android?: AvatarUrl;
    web?: AvatarUrl
}

export interface ChatMessageSender {
    user_id: number;
    first_name: string;
    last_name: string;
    title: string;
    avatar_urls: AvatarUrls;
}

export interface ChatMessageContent {
    content_text: string;
    content_type: string;
    content_uri?: string;
    content_preview_url?: string;
    content_action_url?: string;
    sender_meta: ChatMessageSender;
}

export interface ChatMessage {
    channel_id: number;
    sequence_number: number;
    event_id: string;
    recorded: Date;
    user_id: number;
    event_name: string;
    version_major: number;
    version_minor: number;
    payload: ChatMessageContent;
}