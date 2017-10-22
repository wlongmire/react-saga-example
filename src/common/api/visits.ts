import { getRequestInit, BASE_URL } from './util';
// import { Visit } from '../models/visit';

export const getForChannel = (channelId: number) => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/exposed/visits/${channelId}`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error(`Error fetching visits for channel ${channelId}`);
            }
            return response.json();
        }).then((result: Map<string, any>) => {
            
            result.forEach((val, key) => {
                console.log('key', key);
                console.log('value', val);
            });
        });
}