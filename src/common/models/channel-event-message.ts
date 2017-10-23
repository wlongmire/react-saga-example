export interface ChannelEventMessage<T> {
    eventId: string;
    eventType: string;
    channelId: number;
    versionMajor: number;
    versionMinor: number;
    payload: T;
}