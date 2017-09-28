import * as Common from '../common';
import { ActionType } from './actions';

export abstract class User {
    id?: number;
    type: string;
    email: string;
    password: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    sex?: string;
    streetAddress1: string;
    streetAddress2?: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode?: string;
    primaryPhone: string;
    primaryPhoneType: string;
    avatarId: number;
    primaryChannel?: number;
    abstract toBody(): object;
}

export class PatientUser extends User {
    type: 'patient';
    lifecoStartDate: string;
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

    toBody(): object {
        return this;
    }
}

export class DoctorUser extends User {
    type: 'doctor';
    ssn?: string;
    npi: string;
    specialty?: string;
    credential?: string;
    clinicianId?: number;

    toBody(): object {
        return this;
    }
}

export class DosespotUser extends PatientUser {
    dosespotPatientId: number
}

export class OpsUser extends User {
    type: 'ops';
    credential?: string;

    toBody(): object {
        return this;
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
            const users = state.items.splice(idx, 1, updated);
            return { ...state, isFetching: false, fetchError: null, items: users};

        case ActionType.UPDATE_USER_FAILURE:
            return { ...state, isFetching: false, fetchError: action.value};

        default:
            return state;
    }
}