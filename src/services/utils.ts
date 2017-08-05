import { v4 } from 'uuid';
import { ChannelEventMessageRequest } from '../common';

/** Creates */
export const createRequest = (method: string, basePath: string, urlPath?: string, body?: object, ): Promise<object> => {
    const headers = new Headers();
    headers.append('Authorization', `Token ${process.env.REACT_APP_API_TOKEN}`);
    headers.append('Content-Type', 'application/json');

    const requestInit: RequestInit = {
        method,
        headers,
        mode: 'cors',
        cache: 'default'
    };
    
    const url = createUrl(basePath);
    const request = new Request(url, requestInit);
    return fetch(request).then(response => response.json());
};

/** Makes a url using the environment settings.  */
export const createUrl = (basePath: string, extendedPath?: string) => {
    const host = process.env.REACT_APP_API_HOST;
    const port = process.env.REACT_APP_API_PORT;
    
    let url = `https://${host}`;

    if (port) {
        url = `${url}:${port}`;
    }

    url = `${url}/${basePath}`;

    if (extendedPath) {
        url = `${url}/${extendedPath}`;
    }

    return url;
};

/** Creates a channel message request */
export function createChannelMessageRequest<T> (
    eventType: string, 
    channelId: number,
    payload: T,
    versionMajor: number = 1, 
    versionMinor: number = 1): ChannelEventMessageRequest<T> {
        const message = new ChannelEventMessageRequest<T>();
        message.eventId = v4();
        message.eventType = eventType;
        message.channelId = channelId;
        message.versionMajor = versionMajor;
        message.versionMinor = versionMinor;
        message.payload = payload;
        return message;
}