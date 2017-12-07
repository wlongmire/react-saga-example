import { getRequestInit, BASE_URL } from './util';
import { Patient } from '../models';

export const fetchAll = () => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/list_my_patients`, requestInit).then((response: any) => {
        if (response.ok) { 
            return response.json();
        } else {
            throw new Error('fetch patients failed');
        }
    }).then((data: any) => {
        return data.map((raw: any) => {
            return {
                id: raw.user_id,
                firstName: raw.first,
                lastName: raw.last,
                phone: raw.phone,
                email: raw.email,
                name: `${raw.first} ${raw.last}`,
                primaryChannel: raw.primary_channel,
                treatments: [],
                visits: [],
                tests: [],
                imaging: [],
                wellness: {
                    patientId: raw.user_id,
                    goals: [],
                    maintenance: [],
                    immunizations: []
                },
                other: {}
            } as Patient;
        });
    });
};