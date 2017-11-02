import { User } from './user';

export class DoctorUser extends User {
    ssn?: string;
    npi: string;
    specialty?: string;
    credential?: string;
    clinicianId?: number;

    static fromPayload(data: any): DoctorUser { // tslint:disable-line
        let doctorUser = new DoctorUser();
        return {
            ...doctorUser,
            id: data.user_id,
            avatarId: data.avatar_id,
            email: data.email,
            primaryPhone: data.phone,
            primaryPhoneType: data.phone_type,
            firstName: data.first,
            middleName: data.middle,
            lastName: data.last,
            dateOfBirth: data.date_of_birth,
            ssn: data.ssn,
            sex: data.sex,
            npi: data.npi,
            specialty: data.specialty,
            credential: data.credential,
            clinicianId: data.clincian_id,
            streetAddress1: data.street_address_1,
            streetAddress2: data.street_address_2,
            city: data.city,
            state: data.state,
            postalCode: data.postal_code,
            countryCode: data.country_code
        } as DoctorUser;
    }

    static toPayload(user: DoctorUser): object {
        return {
            user_id: user.id,
            avatar_id: user.avatarId,
            email: user.email,
            password: user.password,
            phone: user.primaryPhone,
            phone_type: user.primaryPhoneType,
            first: user.firstName,
            middle: user.middleName || '',
            last: user.lastName,
            date_of_birth: user.dateOfBirth || '',
            ssn: user.ssn || '',
            sex: user.sex || '',
            npi: user.npi || '',
            specialty: user.specialty || '',
            credential: user.credential || '',
            clincian_id: user.clinicianId || '',
            street_address_1: user.streetAddress1 || '',
            street_address_2: user.streetAddress2 || '',
            city: user.city || '',
            state: user.state || '',
            postal_code: user.postalCode || '',
            country_code: user.countryCode || '',
            role_id: 1
        };
    }

    constructor() {
        super();
        this.type = 'doctor';
    }

    isValid(): boolean {
        return true;
    }
}