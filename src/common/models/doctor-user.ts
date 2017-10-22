import * as _ from 'lodash';
import { User } from './user';

export class DoctorUser extends User {
    ssn?: string;
    npi: string;
    specialty?: string;
    credential?: string;
    clinicianId?: number;

    constructor() {
        super();
        this.type = 'doctor';
    }

    isValid(): boolean {
        return true;
    }

    static fromPayload(data: any): DoctorUser {
        const user = new DoctorUser();
        if (_.has(data, 'user_id')) user.id = data['user_id'];
        if (_.has(data, 'avatar_id')) user.avatarId = data['avatar_id'];
        if (_.has(data, 'email')) user.email = data['email'];
        if (_.has(data, 'password')) user.password = data['password'];
        if (_.has(data, 'phone')) user.primaryPhone = data['phone'];
        if (_.has(data, 'phone_type')) user.primaryPhoneType = data['phone_type'];
        if (_.has(data, 'first')) user.firstName = data['first'];
        if (_.has(data, 'middle')) user.middleName = data['middle'];
        if (_.has(data, 'last')) user.lastName = data['last'];
        if (_.has(data, 'date_of_birth')) user.dateOfBirth = data['date_of_birth'];
        if (_.has(data, 'ssn')) user.ssn = data['ssn'];
        if (_.has(data, 'sex')) user.sex = data['sex'];
        if (_.has(data, 'npi')) user.npi = data['npi'];
        if (_.has(data, 'specialty')) user.specialty = data['specialty'];
        if (_.has(data, 'credential')) user.credential = data['credential'];
        if (_.has(data, 'clincian_id')) user.clinicianId = data['clincian_id'];
        if (_.has(data, 'street_address_1')) user.streetAddress1 = data['street_address_1'];
        if (_.has(data, 'street_address_2')) user.streetAddress2 = data['street_address_2'];
        if (_.has(data, 'city')) user.city = data['city'];
        if (_.has(data, 'state')) user.state = data['state'];
        if (_.has(data, 'postal_code')) user.postalCode = data['postal_code'];
        if (_.has(data, 'country_code')) user.countryCode = data['country_code'];
        return user;
    }

    static toPayload(user: DoctorUser): any {
        const payload = new Object({
            user_id: user.id,
            avatar_id: user.avatarId,
            email: user.email,
            password: user.password,
            phone: user.primaryPhone,
            phone_type: user.primaryPhoneType,
            first: user.firstName,
            middle: user.middleName,
            last: user.lastName,
            date_of_birth: user.dateOfBirth,
            ssn: user.ssn,
            sex: user.sex,
            npi: user.npi,
            specialty: user.specialty,
            credential: user.credential,
            clincian_id: user.clinicianId,
            street_address_1: user.streetAddress1,
            street_address_2: user.streetAddress2,
            city: user.city,
            state: user.state,
            postal_code: user.postalCode,
            country_code: user.countryCode,
            role_id: 1
        });
        return payload;
    }
}