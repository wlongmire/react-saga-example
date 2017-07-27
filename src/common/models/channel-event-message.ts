export interface ChannelEventMessage<T> {
    eventId: string;
    eventType: string;
    channelId: number;
    versionMajor: number;
    versionMinor: number;
    payload: T;
}

export class ChannelEventMessageResponse<T> implements ChannelEventMessage<T> {
    eventId: string;
    eventType: string;
    channelId: number;
    versionMajor: number;
    versionMinor: number;
    payload: T;
    sequenceNumber: number;
    recorded: number;
}

export class ChannelEventMessageRequest<T> implements ChannelEventMessage<T> {
    eventId: string;
    eventType: string;
    channelId: number;
    versionMajor: number;
    versionMinor: number;
    payload: T;
}