import { User, DoctorUser, PatientUser, OpsUser } from '../../users';
import * as _ from 'lodash';

const BASE_URL = `https://${process.env.REACT_APP_API_HOST}/exposed`

export class UserService {

    static fetchAllUsers() {
        const requestInit = this.getRequestInit('GET');
        return fetch(`${BASE_URL}/get_user_info`, requestInit)
            .then((response: any) => {
                if (!response.ok) {
                    throw new Error('Unable to fetch users');
                }
                return response.json();
            }).then((data: any) => {
                return data.map(this.mapToUser);
            });
    }

    static createUser(user: User) {
        const requestInit = this.getRequestInit('POST', user.toBody());
        return fetch(`${BASE_URL}/register_client`, requestInit)
            .then((response: any) => {
                if (!response.ok) {
                    throw new Error('Unable to create user');
                }
                return response.json();
            }).then((data: any) => {
                return data.map(this.mapToUser);
            });
    }

    static updateUser(user: User) {
        const requestInit = this.getRequestInit('POST', user.toBody());
        return fetch(`${BASE_URL}/update_user`, requestInit)
            .then((response: any) => {
                if (!response.ok) {
                    throw new Error('Unable to update user');
                }
                return response.json();
            }).then((data: any) => {
                return data.map(this.mapToUser);
            });
    }

    static mapToUser(data: any): User {
        
        switch (data.role_id) {
            case 1:
                const doctorUser = new DoctorUser();
                doctorUser.id = UserService.safePick(data, 'user_id', 0);
                doctorUser.primaryPhone = UserService.safePick(data, 'phone', '');
                doctorUser.primaryPhoneType = UserService.safePick(data, 'primary_phone_type', '');
                doctorUser.firstName = UserService.safePick(data, 'first', '');
                doctorUser.lastName = UserService.safePick(data, 'last', '');
                doctorUser.email = UserService.safePick(data, 'email', '');
                doctorUser.primaryChannel = UserService.safePick(data, 'primary_channel', 0);
                return doctorUser;
            case 4:
                const opsUser = new OpsUser();
                opsUser.id = UserService.safePick(data, 'user_id', 0);
                opsUser.primaryPhone = UserService.safePick(data, 'phone', '');
                opsUser.primaryPhoneType = UserService.safePick(data, 'primary_phone_type', '');
                opsUser.firstName = UserService.safePick(data, 'first', '');
                opsUser.lastName = UserService.safePick(data, 'last', '');
                opsUser.email = UserService.safePick(data, 'email', '');
                opsUser.primaryChannel = UserService.safePick(data, 'primary_channel', 0);
                return opsUser;
            case 6:
                const patientUser = new PatientUser();
                patientUser.id = UserService.safePick(data, 'user_id', 0);
                patientUser.primaryPhone = UserService.safePick(data, 'phone', '');
                patientUser.primaryPhoneType = UserService.safePick(data, 'primary_phone_type', '');
                patientUser.firstName = UserService.safePick(data, 'first', '');
                patientUser.lastName = UserService.safePick(data, 'last', '');
                patientUser.email = UserService.safePick(data, 'email', '');
                patientUser.primaryChannel = UserService.safePick(data, 'primary_channel', 0);
                return patientUser;
            default:
                throw new Error(`Unsupported user type: ${data.role_id}`);
        }
    }

    static safePick(obj: object, path: string, def?: any): any {
        return _.has(obj, path) ? obj[path] : def;
    }

    static getRequestInit(method: string, body: any = null, useAppToken: boolean = false): RequestInit {
        const accessToken = useAppToken ? process.env.REACT_APP_API_TOKEN : localStorage.getItem('access_token');
        const headers = new Headers({Authorization: `Token ${accessToken}`});
        return {
            method,
            headers,
            body,
            mode: 'cors'
        };
    }
}