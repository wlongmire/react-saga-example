import { ChannelEventMessage } from './channel-event-message';

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