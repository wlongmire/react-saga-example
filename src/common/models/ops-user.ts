import { User } from './user';

export class OpsUser extends User {
    credential?: string;

    static fromPayload(data: any): OpsUser { // tslint:disable-line
        return {
            id: data.user_id,
            avatarId: data.avatar_id,
            email: data.email,
            primaryPhone: data.phone,
            primaryPhoneType: data.phone_type,
            firstName: data.first,
            middleName: data.middle,
            lastName: data.last,
            dateOfBirth: data.date_of_birth,
            sex: data.sex,
            streetAddress1: data.street_address_1,
            streetAddress2: data.street_address_2,
            city: data.city,
            state: data.state,
            postalCode: data.postal_code,
            countryCode: data.country_code
        } as OpsUser;
    }

    static toPayload(user: OpsUser): any { // tslint:disable-line
        return {
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
        };
    }

    constructor() {
        super();
        this.type = 'ops';
    }

    isValid(): boolean {
        return true;
    }
}