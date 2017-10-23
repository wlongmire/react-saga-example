import { getRequestInit, BASE_URL } from './util';
// import { Visit } from '../models/visit';

export const getForChannel = (channelId: number) => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/wellness/${channelId}`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error(`Error fetching visits for channel ${channelId}`);
            }
            return response.json();
        }).then((result: Map<string, any>) => {
            
            console.log('wellness', result);

            return Promise.resolve({
                goals: [{
                    id: '1',
                    goal: 'Run 24 miles',
                    status: 'Active',
                    note: 'Wants to run 24 miles before his next birthday. We put him on a nutrition plan.'
                }],
                maintenance: [{
                    id: '1',
                    type: 'Pap Smear',
                    date: new Date('2013-06-24')
                }],
                immunizations: [{
                    id: '1',
                    type: 'Yellow Fever',
                    date: new Date('2012-06-24')
                }],
                activity: 'Anemia biopsy blood pressure bronchoconstriction...',
                sleep: 'Anemia biopsy blood pressure bronchoconstriction...',
                behavioral: 'Anemia biopsy blood pressure bronchoconstriction...',
                community: 'Anemia biopsy blood pressure bronchoconstriction...'
            })
        });
}