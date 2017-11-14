export class ChannelEventMessageRequest<T> {
    eventId: string;
    eventType: string;
    channelId: number;
    major: number;
    minor: number;
    payload: T;
}