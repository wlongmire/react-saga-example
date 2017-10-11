import { getRequestInit, BASE_URL } from '../../utils/service-util';
import { Patient } from '../../patients';

// const BASE_URL = 'https://api.life.cheap/exposed/list_my_patients'

export class PatientService {

    static fetchAll() {
        const requestInit = getRequestInit('GET');
        return fetch(`${BASE_URL}/list_my_patients`, requestInit).then((response: any) => {
            if (response.ok) { 
                return response.json();
            } else {
                throw new Error('fetch patients failed');
            }
        }).then((data: any) => {
            return data.map((raw: any) => {
                return <Patient>{
                    id: raw.user_id,
                    firstName: raw.first,
                    lastName: raw.last,
                    phone: raw.phone,
                    email: raw.email,
                    name: `${raw.first} ${raw.last}`,
                    primaryChannel: raw.primary_channel
                    // avatar: 'http://www.gravatar.com/avatar/1f27b03f119910811d8cc8ff9dc1e922?s=48&d=identicon' // replace with raw when available
                };
            });
        })
    }

}