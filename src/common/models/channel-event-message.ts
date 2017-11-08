export interface ChannelEventMessage<T> {
    event_id: string;
    event_type: string;
    channel_id: number;
    recorded: number;
    major: number;
    minor: number;
    sequence_no: number;
    payload: T;
    user_id: number;
}