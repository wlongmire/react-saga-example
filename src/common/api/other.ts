import { getRequestInit, BASE_URL } from './util';

export const getOtherForChannel = (channelId: number) => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/other/${channelId}`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error(`Error fetching visits for channel ${channelId}`);
            }
            return response.json();
        }).then((result: Map<string, any>) => {

            // temporary - will be removed soon
            return Promise.resolve({
                social: 'Anemia biopsy blood pressure bronchoconstriction...',
                family: 'Anemia biopsy blood pressure bronchoconstriction...',
                allergies: 'Anemia biopsy blood pressure bronchoconstriction...'
            });
        });
}