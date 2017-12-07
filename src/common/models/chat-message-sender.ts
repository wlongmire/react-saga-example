import { AvatarUrls } from './avatar-urls';

export interface ChatMessageSender {
    user_id: number;
    first_name: string;
    last_name: string;
    title?: string;
    avatar_urls: AvatarUrls;
}