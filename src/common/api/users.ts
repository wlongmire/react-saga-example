import * as _ from 'lodash';
import { User, DoctorUser, OpsUser, PatientUser } from '../models';

const BASE_URL = `https://${process.env.REACT_APP_API_HOST}/exposed`

export const fetchAllUsers = () => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/get_user_info`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error('Unable to fetch users');
            }
            return response.json();
        }).then((data: any) => {
            return data.map(mapToUser);
        });
}

export const createUser = (user: User) => {
    let payload;

    if (user instanceof PatientUser) {
        payload = PatientUser.toPayload(user);
    }

    if (user instanceof DoctorUser) {
        payload = DoctorUser.toPayload(user);
    }

    if (user instanceof OpsUser) {
        payload = OpsUser.toPayload(user);
    }

    let json = _.omitBy(payload, _.isNil);
    const requestInit = getRequestInit('POST', JSON.stringify(json), true, 'application/json');

    return fetch(`${BASE_URL}/create_user`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error('Unable to create user');
            }
            return response.json();
        }).then((data: any) => {
            return data.map(mapToUser);
        });
}

export const updateUser = (user: User) => {
    let payload: any;
    
    if (user instanceof PatientUser) {
        payload = PatientUser.toPayload(user);
    }

    if (user instanceof DoctorUser) {
        payload = DoctorUser.toPayload(user);
    }

    if (user instanceof OpsUser) {
        payload = OpsUser.toPayload(user);
    }

    let json = _.omitBy(payload, _.isNil);
    const requestInit = getRequestInit('POST', JSON.stringify(json), false, 'application/json');

    return fetch(`${BASE_URL}/update_user`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error('Unable to update user');
            }
            return response.json()
        }).then((data: any) => {
            let updated = _.zipObject(data.map((pair: any) => pair.key), data.map((pair:any) => pair.value));
            updated['user_id'] = user.id;

            if (payload) {
                updated['role_id'] = payload['role_id'];
            }

            return mapToUser(updated);
        });
}

const mapToUser = (data: any): User => {
    switch (data.role_id) {
        case 1:
            return DoctorUser.fromPayload(data);
        case 4:
            return OpsUser.fromPayload(data);
        case 6:
            return PatientUser.fromPayload(data);
        default:
            throw new Error('unsupported entity type');
    }
}

const getRequestInit = (method: string, body: any = null, useAppToken: boolean = false, contentType?: string): RequestInit => {
    const accessToken = useAppToken ? process.env.REACT_APP_API_TOKEN : localStorage.getItem('access_token');
    const headers = new Headers({Authorization: `Token ${accessToken}`});

    if (contentType) {
        headers.append('Content-Type', contentType);
    }

    return {
        method,
        headers,
        body,
        mode: 'cors'
    };
}
