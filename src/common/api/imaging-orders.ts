import { getRequestInit, BASE_URL } from './util';
// import { Visit } from '../models/visit';

export const getForChannel = (channelId: number) => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/imagingorder/${channelId}`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error(`Error fetching visits for channel ${channelId}`);
            }
            return response.json();
        }).then((result: Map<string, any>) => {
            
            console.log('imaging-orders', result);

            return Promise.resolve([{
                id: '1',
                status: 'Scheduled',
                patientId: 4610117883485374,
                imagingTypeId: '',
                imagingTypeDescription: 'CT Scan',
                imagingLocation: 'Dexter\'s Lab - 25 Broadway, Jersey City, NJ 33048',
                scheduledFor: new Date('2017-08-16'),
                publicNote: 'CT scan of the left foot to confirm abnormalities.'
            },
            {
                id: '2',
                status: 'Scheduled',
                patientId: 4610117883485374,
                imagingTypeId: '',
                imagingTypeDescription: 'CT Scan',
                imagingLocation: 'Dexter\'s Lab - 25 Broadway, Jersey City, NJ 33048',
                scheduledFor: new Date('2017-08-16'),
                publicNote: 'CT scan of the left foot to confirm abnormalities.'
            }])
        });
}