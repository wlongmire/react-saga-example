import * as _ from 'lodash';
import { User, DoctorUser, OpsUser, PatientUser } from '../models';
import { getRequestInit, BASE_URL } from './util';

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
};

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
                return response.text().then((text: string) => {
                    return text;
                });
            } else {
                return response.json();
            }
        }).then((data: any) => {
            if (data.constructor.name === 'String') {
                throw new Error(data as string);
            } else {
                return {
                    ...user, 
                    id: data.new_user_id, 
                    primaryChannel: data.new_channel_id
                } as User;
            }
        });
};

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

    if (!user.id) {
        throw new Error('Cannot update user with missing id');
    }

    let json = _.omitBy(payload, _.isNil);
    let jsonPayload = _.omit(json, 'password');
    const requestInit = getRequestInit('POST', JSON.stringify(jsonPayload), false, 'application/json');

    return fetch(`${BASE_URL}/update_user`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                return response.text().then((text: string) => {
                    return text;
                });
            } else {
                return response.json();
            }
        }).then((data: any) => {
            if (data.constructor.name === 'String') {
                throw new Error(data as string);
            } else {
                let updated = data.reduce(
                    (result: Object, current: any) => {
                        result[current.key] = current.value;
                        return result;
                    },
                    {}
                );

                updated.user_id = user.id;
                if (payload) {
                    updated.role_id = payload.role_id;
                }
                
                return mapToUser(updated);
            }
        });
};

/**
 * Maps raw data to the correct user type instance.
 * User mapping:
 * 
 * 1: doctor
 * 2: nurse
 * 3: assistant
 * 4: cx
 * 5: admin
 * 6: patient
 * 7: external
 * @param data - the raw json data
 * 
 */
const mapToUser = (data: any): User => {
    switch (data.role_id) {
        case 1: 
            return DoctorUser.fromPayload(data);
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 7: 
            return OpsUser.fromPayload(data);
        case 6: 
            return PatientUser.fromPayload(data);
        default:
            throw new Error('unsupported entity type');
    }
};
