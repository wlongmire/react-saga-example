import { createRequest } from '../utils';
import { ChannelEventMessageRequest } from '../../common';

export class ChannelEventService {
    /** Fetches events for the specified channel id */
    static fetch(channelId: number) {
        const body = {
            channel_id: channelId
        };
        return createRequest('POST', 'exposed', 'get_events', body);
    }

    /** Posts an event message */
    static post<T>(message: ChannelEventMessageRequest<T>) {
        return createRequest('POST', 'exposed', 'post_event', message);
    }
}
