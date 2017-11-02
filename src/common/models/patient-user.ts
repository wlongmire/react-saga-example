import { User } from './user';

export class PatientUser extends User {
    lifecoStartDate: Date;
    insuranceId?: string;
    insuranceGroup?: string;
    rxBin?: string;
    rxPcn?: string;
    rxGroup?: string;
    ssn?: string;
    driversLicense?: string;
    pharmacyId?: string;
    contactFirstName?: string;
    contactLastName?: string;
    contactRelationship?: string;
    contactPhone?: string;
    contactEmail?: string;

    static fromPayload(data: any): PatientUser { // tslint:disable-line
        let patientUser = new PatientUser();
        return {
            ...patientUser,
            id: data.user_id,
            avatarId: data.avatar_id,
            email: data.email,
            primaryPhone: data.phone,
            primaryPhoneType: data.phone_type,
            firstName: data.first,
            middleName: data.middle,
            lastName: data.last,
            dateOfBirth: data.date_of_birth,
            insuranceId: data.insurance_id,
            insuranceGroup: data.insurance_group,
            rxBin: data.rx_bin,
            rxPcn: data.rx_pcn,
            rxGroup: data.rx_group,
            lifecoStartDate: data.lifeco_start_date,
            driversLicense: data.drivers_license,
            ssn: data.ssn,
            sex: data.sex,
            npi: data.npi,
            gender: data.gender,
            pharmacyId: data.pharmacy_id,
            credential: data.credential,
            clinicianId: data.clincian_id,
            streetAddress1: data.street_address_1,
            streetAddress2: data.street_address_2,
            city: data.city,
            state: data.state,
            postalCode: data.postal_code,
            countryCode: data.country_code,
            contactFirstName: data.contact_first_name,
            contactLastName: data.contact_last_name,
            contactRelationship: data.contact_relationship,
            contactPhone: data.contact_phone,
            contactEmail: data.contact_email
        } as PatientUser;
    }

    static toPayload(user: PatientUser): any { // tslint:disable-line
        return {
            user_id: user.id,
            avatar_id: user.avatarId,
            email: user.email,
            password: user.password,
            phone: user.primaryPhone,
            phone_type: user.primaryPhoneType,
            first: user.firstName,
            preferred: user.preferredName || '',
            middle: user.middleName || '',
            last: user.lastName,
            date_of_birth: user.dateOfBirth || '',
            insurance_id: user.insuranceId || '',
            insurance_group: user.insuranceGroup || '',
            rx_bin: user.rxBin || '',
            rx_pcn: user.rxPcn || '',
            rx_group: user.rxGroup || '',
            lifeco_start_date: user.lifecoStartDate || '',
            drivers_license: user.driversLicense || '',
            ssn: user.ssn || '',
            sex: user.sex || '',
            npi: user.npi || '',
            gender: user.gender || '',
            credential: user.credential || '',
            pharmacy_id: user.pharmacyId || '',
            street_address_1: user.streetAddress1 || '',
            street_address_2: user.streetAddress2 || '',
            city: user.city || '',
            state: user.state || '',
            postal_code: user.postalCode || '',
            country_code: user.countryCode || '',
            contact_first_name: user.contactFirstName || '',
            contact_last_name: user.contactLastName || '',
            contact_relationship: user.contactRelationship || '',
            contact_phone: user.contactPhone || '',
            contact_email: user.contactEmail || '',
            role_id: 6
        };
    }

    constructor() {
        super();
        this.type = 'patient';
    }

    isValid(): boolean {
        return true;
    }
}