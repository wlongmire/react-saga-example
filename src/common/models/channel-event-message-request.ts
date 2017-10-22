import { ChannelEventMessage } from './channel-event-message';

export class ChannelEventMessageRequest<T> implements ChannelEventMessage<T> {
    eventId: string;
    eventType: string;
    channelId: number;
    versionMajor: number;
    versionMinor: number;
    payload: T;
}