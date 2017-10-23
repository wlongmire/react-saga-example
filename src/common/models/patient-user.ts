import * as _ from 'lodash';
import { User } from './user'

export class PatientUser extends User {
    lifecoStartDate: Date;
    insuranceId?: string;
    insuranceGroup?: string;
    rxBin: string;
    rxPcn: string;
    ssn?: string;
    driversLicense?: string;
    pharmacyId?: string;
    contactFirstName?: string;
    contactLastName?: string;
    contactRelationship?: string;
    contactPhone?: string;
    contactEmail?: string;

    constructor() {
        super();
        this.type = 'patient';
    }

    isValid(): boolean {
        return true;
    }

    static fromPayload(data: any): PatientUser {
        const user = new PatientUser();
        if (_.has(data, 'user_id')) user.id = data['user_id'];
        if (_.has(data, 'avatar_id')) user.avatarId = data['avatar_id'];
        if (_.has(data, 'email')) user.email = data['email'];
        if (_.has(data, 'password')) user.password = data['password'];
        if (_.has(data, 'phone')) user.primaryPhone = data['phone'];
        if (_.has(data, 'phone_type')) user.primaryPhoneType = data['phone_type'];
        if (_.has(data, 'first')) user.firstName = data['first'];
        if (_.has(data, 'preferred')) user.preferredName = data['preferred'];
        if (_.has(data, 'middle')) user.middleName = data['middle'];
        if (_.has(data, 'last')) user.lastName = data['last'];
        if (_.has(data, 'date_of_birth')) user.dateOfBirth = data['date_of_birth'];
        if (_.has(data, 'insurance_id')) user.insuranceId = data['insurance_id'];
        if (_.has(data, 'insurance_group')) user.insuranceGroup = data['insurance_group'];
        if (_.has(data, 'rx_bin')) user.rxBin = data['rx_bin'];
        if (_.has(data, 'rx_pcn')) user.rxPcn = data['rx_pcn'];
        if (_.has(data, 'lifeco_start_date')) user.lifecoStartDate = data['lifeco_start_date'];
        if (_.has(data, 'drivers_license')) user.driversLicense = data['drivers_license'];
        if (_.has(data, 'ssn')) user.ssn = data['ssn'];
        if (_.has(data, 'sex')) user.sex = data['sex'];
        if (_.has(data, 'npi')) user.npi = data['npi'];
        if (_.has(data, 'gender')) user.gender = data['gender'];
        if (_.has(data, 'credential')) user.credential = data['credential'];
        if (_.has(data, 'pharmacy_id')) user.pharmacyId = data['pharmacy_id'];
        if (_.has(data, 'street_address_1')) user.streetAddress1 = data['street_address_1'];
        if (_.has(data, 'street_address_2')) user.streetAddress2 = data['street_address_2'];
        if (_.has(data, 'city')) user.city = data['city'];
        if (_.has(data, 'state')) user.state = data['state'];
        if (_.has(data, 'postal_code')) user.postalCode = data['postal_code'];
        if (_.has(data, 'country_code')) user.countryCode = data['country_code'];
        if (_.has(data, 'contact_first_name')) user.contactFirstName = data['contact_first_name'];
        if (_.has(data, 'contact_last_name')) user.contactLastName = data['contact_last_name'];
        if (_.has(data, 'contact_relationship')) user.contactRelationship = data['contact_relationship'];
        if (_.has(data, 'contact_phone')) user.contactPhone = data['contact_phone'];
        if (_.has(data, 'contact_email')) user.contactEmail = data['contact_email'];
        return user;
    }

    static toPayload(user: PatientUser): any {
        const payload = new Object({
            user_id: user.id,
            avatar_id: user.avatarId,
            email: user.email,
            password: user.password,
            phone: user.primaryPhone,
            phone_type: user.primaryPhoneType,
            first: user.firstName,
            preferred: user.preferredName,
            middle: user.middleName,
            last: user.lastName,
            date_of_birth: user.dateOfBirth,
            insurance_id: user.insuranceId,
            insurance_group: user.insuranceGroup,
            rx_bin: user.rxBin,
            rx_pcn: user.rxPcn,
            lifeco_start_date: user.lifecoStartDate,
            drivers_license: user.driversLicense,
            ssn: user.ssn,
            sex: user.sex,
            npi: user.npi,
            gender: user.gender,
            credential: user.credential,
            pharmacy_id: user.pharmacyId,
            street_address_1: user.streetAddress1,
            street_address_2: user.streetAddress2,
            city: user.city,
            state: user.state,
            postal_code: user.postalCode,
            country_code: user.countryCode,
            contact_first_name: user.contactFirstName,
            contact_last_name: user.contactLastName,
            contact_relationship: user.contactRelationship,
            contact_phone: user.contactPhone,
            contact_email: user.contactEmail,
            role_id: 6
        });
        return payload;
    }
}