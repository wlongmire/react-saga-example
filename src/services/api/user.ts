import * as Model from '../../users/models';

const BASE_URL = 'https://api.life.cheap/exposed/list_my_patients'

export class UserService {

    static fetchAllPatients() {
        const accessToken = localStorage.getItem('access_token');
        const headers = new Headers();
        headers.append('Authorization', `Token ${accessToken}`);
        return fetch(BASE_URL, {
            method: 'GET',
            headers,
            mode: 'cors',
            cache: 'default'
        }).then((response:any) => {
            if(response.ok) {
                return response.json()
            }
            return response.json().then((err:Error) => {
                throw new Error;
            })
        }).then((data:any) => {
            return data.map((raw: any) => {
                return <Model.Patient>{
                    id: raw.user_id,
                    name: `${raw.first} ${raw.last}`,
                    primaryChannel: raw.primary_channel,
                    avatar: 'http://www.gravatar.com/avatar/1f27b03f119910811d8cc8ff9dc1e922?s=48&d=identicon' // replace with raw when available
                };
            });
            // dispatch (loadAllPatientsSuccess(patients))
        })
        // .catch(err => {
        //     dispatch(loadAllPatientsSuccess(err))
        // })
    }
}