import { User, DoctorUser, OpsUser, PatientUser } from '../../users';
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
        console.log('createUser', user);
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
        
        console.log('json', json);

        const requestInit = UserService.getRequestInit('POST', JSON.stringify(json), true, 'application/json');

        return fetch(`${BASE_URL}/create_user`, requestInit)
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
        console.log('updateUser', user);
        
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

        console.log('json', json);

        const requestInit = UserService.getRequestInit('POST', JSON.stringify(json), false, 'application/json');

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

                return UserService.mapToUser(updated);

                // console.log('updated: ', UserService.mapToUser(updated));

                // updated['role_id'] = payload['role_id'];
                // UserService.mapToUser()
                // console.log('data', data);
                // console.log('keys', data.map((pair: any) => pair.key));
                // console.log('values', data.map((pair: any) => pair.value));
                // console.log('object', _.zipObject(data.map((pair: any) => pair.key), data.map((pair:any) => pair.value)));
                // return data.map(this.mapToUser);
            });
    }

    static mapToUser(data: any): User {

        console.log(data);
        // const user = new User();
        // user.id = UserService.safePick(data, 'user_id', 0);
        // user.email = UserService.safePick(data, 'email', '');
        // user.firstName = UserService.safePick(data, 'first', '');
        // user.middleName = UserService.safePick(data, 'middle', undefined);
        // user.lastName = UserService.safePick(data, 'last', '');
        // user.primaryPhone = UserService.safePick(data, 'phone', undefined);
        // user.primaryPhoneType = UserService.safePick(data, 'primary_phone_type', undefined);
        // user.dateOfBirth = UserService.safePick(data, 'dob', undefined);
        // user.gender = UserService.safePick(data, 'gender', undefined);
        // user.sex = UserService.safePick(data, 'sex', undefined);
        // user.streetAddress1 = UserService.safePick(data, 'street_address_1', undefined);
        // user.streetAddress2 = UserService.safePick(data, 'street_address_2', undefined);
        // user.city = UserService.safePick(data, 'city', undefined);
        // user.state = UserService.safePick(data, 'state', undefined);
        // user.postalCode = UserService.safePick(data, 'postal_code', undefined);
        // user.countryCode = UserService.safePick(data, 'country_code', undefined);
        // user.primaryPhone = UserService.safePick(data, 'primary_phone', undefined);
        // user.primaryPhoneType = UserService.safePick(data, 'dob', undefined);
        // user.avatarId = UserService.safePick(data, 'avatar_id', undefined);
        // user.primaryChannel = UserService.safePick(data, 'primary_channel', undefined);
    
        // user.lifecoStartDate = UserService.safePick(data, 'lifeco_start_date', undefined);
        // user.insuranceId = UserService.safePick(data, 'insurance_id', undefined);
        // user.insuranceGroup = UserService.safePick(data, 'insurance_group', undefined);
        // user.rxBin = UserService.safePick(data, 'rx_bin', undefined);
        // user.rxPcn = UserService.safePick(data, 'rx_pcn', undefined);
        // user.ssn = UserService.safePick(data, 'ssn', undefined);
        // user.driversLicense = UserService.safePick(data, 'drivers_license', undefined);
        // user.pharmacyId = UserService.safePick(data, 'pharmacy_id', undefined);
        // user.contactFirstName = UserService.safePick(data, 'contact_first_name', undefined);
        // user. contactLastName = UserService.safePick(data, 'contact_last_name', undefined);
        // user.contactRelationship = UserService.safePick(data, 'contact_relationship', undefined);
        // user.contactPhone = UserService.safePick(data, 'contact_phone', undefined);
        // user.contactEmail = UserService.safePick(data, 'contact_email', undefined);
    
        // user.npi = UserService.safePick(data, 'npi', undefined);
        // user.specialty = UserService.safePick(data, 'specialty', undefined);
        // user.credential = UserService.safePick(data, 'credential', undefined);
        // user.clinicianId = UserService.safePick(data, 'dosespot_clincian_id', undefined);
        // user.dosespotPatientId = UserService.safePick(data, 'dosespot_patient_id', undefined);

        // user.primaryChannel = UserService.safePick(data, 'primary_channel', 0);

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

    static safePick(obj: object, path: string, def?: any): any {
        return _.has(obj, path) ? obj[path] : def;
    }

    static getRequestInit(method: string, body: any = null, useAppToken: boolean = false, contentType?: string): RequestInit {
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
}