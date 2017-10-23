import { getRequestInit, BASE_URL } from './util';
// import { Visit } from '../models/visit';

export const getForChannel = (channelId: number) => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/treatments/${channelId}`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error(`Error fetching treatments for channel ${channelId}`);
            }
            return response.json();
        }).then((result: Map<string, any>) => {
            
            console.log('treatments', result);
            
            Promise.resolve([
                {
                    id: '1',
                    dateWritten: new Date('2017-09-16'),
                    medicationName: 'Rimabotulinumtoxin',
                    status: 'Pharmacy Received',
                    sig: 'Take once everyday.',
                    refills: 0,
                    pharmacyName: ''
                },
                {
                    id: '2',
                    dateWritten: new Date('2017-08-16'),
                    medicationName: 'Rituxan',
                    status: 'Pharmacy Received',
                    sig: 'Do this all the time.',
                    refills: 0,
                    pharmacyName: ''
                    
                },
                {
                    id: '3',
                    dateWritten: new Date('2016-12-16'),
                    medicationName: 'Super Advil',
                    status: 'Pharmacy Received',
                    sig: 'If you notice anything cray call me.',
                    refills: 0,
                    pharmacyName: ''
                }
            ]);
        });
}