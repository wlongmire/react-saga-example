import * as _ from 'lodash';
import { User } from './user';

export class OpsUser extends User {
    credential?: string;

    constructor() {
        super();
        this.type = 'ops';
    }

    isValid(): boolean {
        return true;
    }

    static fromPayload(data: any): OpsUser {
        const user = new OpsUser();
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
        if (_.has(data, 'sex')) user.sex = data['sex'];
        if (_.has(data, 'street_address_1')) user.streetAddress1 = data['street_address_1'];
        if (_.has(data, 'street_address_2')) user.streetAddress2 = data['street_address_2'];
        if (_.has(data, 'city')) user.city = data['city'];
        if (_.has(data, 'state')) user.state = data['state'];
        if (_.has(data, 'postal_code')) user.postalCode = data['postal_code'];
        if (_.has(data, 'country_code')) user.countryCode = data['country_code'];
        return user;
    }

    static toPayload(user: OpsUser): any {
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
            sex: user.sex,
            street_address_1: user.streetAddress1,
            street_address_2: user.streetAddress2,
            city: user.city,
            state: user.state,
            postal_code: user.postalCode,
            country_code: user.countryCode, 
            role_id: 4
        });
        return payload;
    }
}