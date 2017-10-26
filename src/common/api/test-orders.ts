import { getRequestInit, BASE_URL } from './util';

export const getTestOrdersForChannel = (channelId: number) => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/testorders/${channelId}`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error(`Error fetching visits for channel ${channelId}`);
            }
            return response.json();
        }).then((result: Map<string, any>) => {

            // temporary - will be removed shortly
            return Promise.resolve([{
                id: '1',
                status: 'Collected',
                assigneeId: '',
                patientId: 4610117883485374,
                name: 'Hormone Tests',
                scheduledFor: new Date('2017-08-16'),
                publicNote: 'Albumin levels were higher than expected. Updated your case to the flu and will send medication shortly.'
            },
            {
                id: '2',
                status: 'Results in',
                assigneeId: '',
                patientId: 4610117883485374,
                name: 'Routine blood work',
                scheduledFor: new Date('2017-08-16'),
                publicNote: 'Albumin levels were higher than expected. Updated your case to the flu and will send medication shortly.'
            },
            {
                id: '1',
                status: 'Released',
                assigneeId: '',
                patientId: 4610117883485374,
                name: 'Flu confirmation',
                scheduledFor: new Date('2017-08-16'),
                publicNote: 'Albumin levels were higher than expected. Updated your case to the flu and will send medication shortly.'
            }])
        });
}