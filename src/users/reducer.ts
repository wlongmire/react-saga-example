import * as Common from '../common';
import { ActionType } from './actions';
import * as _ from 'lodash';

export abstract class User {
    id?: number;
    type: string;
    email: string;
    password?: string;
    firstName: string;
    preferredName?: string;
    middleName?: string;
    lastName: string;
    dateOfBirth?: Date;
    gender: string;
    sex?: string;
    streetAddress1: string;
    streetAddress2?: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode?: string;
    primaryPhone?: string;
    primaryPhoneType?: string;
    avatarId?: number;
    primaryChannel?: number;

    lifecoStartDate?: Date;
    insuranceId?: string;
    insuranceGroup?: string;
    rxBin?: string;
    rxPcn?: string;
    ssn?: string;
    driversLicense?: string;
    pharmacyId?: string;
    contactFirstName?: string;
    contactLastName?: string;
    contactRelationship?: string;
    contactPhone?: string;
    contactEmail?: string;

    npi?: string;
    specialty?: string;
    credential?: string;
    clinicianId?: number;

    dosespotPatientId?: number

    isNew() {
        return this.id === undefined;
    }

    abstract isValid(): boolean;
}

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

export class DosespotUser extends PatientUser {
    dosespotPatientId: number
}

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

export interface UserState {
    isFetching: boolean;
    items: Array<User>;
    createError?: Error;
    saveError?: Error;
    fetchError?: Error;
}

function initialState(): UserState {
    return {
        isFetching: false,
        items: []
    };
}

export default function reducer(state = initialState(), action: Common.ActionResult<any>){

    switch(action.type){
        case ActionType.CREATE_USER:
            return { ...state, isFetching: true, createError: null};

        case ActionType.CREATE_USER_SUCCESS:
            return { ...state, isFetching: false, createError: null, items: state.items.concat(action.value)};

        case ActionType.CREATE_USER_FAILURE:
            return { ...state, isFetching: false, createError: action.value };

        case ActionType.FETCH_ALL_USERS:
            return { ...state, isFetching: true, fetchError: null};

        case ActionType.FETCH_ALL_USERS_SUCCESS:
            return { ...state, isFetching: false, fetchError: null, items: action.value};

        case ActionType.FETCH_ALL_USERS_FAILURE:
            return { ...state, isFetching: false, fetchError: action.value};

        case ActionType.UPDATE_USER:
            return { ...state, isFetching: true, fetchError: false};

        case ActionType.UPDATE_USER_SUCCESS:
            const updated = <User>action.value;
            const idx = state.items.findIndex((user: User) => user.id === updated.id );
            state.items.splice(idx, 1, updated);
            return { ...state, isFetching: false, fetchError: null};

        case ActionType.UPDATE_USER_FAILURE:
            return { ...state, isFetching: false, fetchError: action.value};

        default:
            return state;
    }
}