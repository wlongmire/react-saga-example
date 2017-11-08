export class ChannelEventMessageRequest<T> {
    event_id: string;
    event_type: string;
    channel_id: number;
    major: number;
    minor: number;
    payload: T;
}