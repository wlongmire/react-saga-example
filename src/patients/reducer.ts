import * as Actions from './actions';
import * as _ from 'lodash';
import { ActionResult } from '../common';
import { ChatChannelInfo } from '../chat';

export interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    primaryChannel: number;
    age?: string;
    gender?: string;
    avatar?: string;
    phone?: string;
    email?: string;
    sso?: SingleSignOnInfo;
    channel?: ChatChannelInfo;
    treatments: Array<Treatment>;
    visits: Array<Visit>;
    tests: Array<Test>;
    imaging: Array<Imaging>;
    wellness: Wellness;
    other: Other;
}

export class Treatment {
    id: string;
    status: string;
    dateWritten: Date;
    medicationName: string;
    refills: number;
    sig?: string;
    form?: string;
    dosage?: string;
    quantity?: string;
    pharmacyName: string;
    daysSupply?: number;
    endOn?: Date;
    patientId?: number;
    internalNotes?: Array<InternalNote>;
}

export class Visit {
    id: string;
    status: string;
    assigneeId: string;
    cases?: Array<string>;
    patientId: number;
    visitType: string;
    maintenance: Array<string>;
    doctorId: string;
    doctorType: string;
    clinic?: Clinic;
    scheduledFor: Date;
    estimatedDuration?: number;
    complaints?: Array<string>;
    vitals?: Array<object>;
    systemsReview?: Array<object>;
    diagnosis?: Array<Diagnosis>;
    subjective?: string;
    objective?: string;
    assessment?: string;
    nextSteps?: string;
    internalNotes?: Array<InternalNote>;
}

export interface Diagnosis {
    code: string;
    description: string;
}

export interface Clinic {
    name: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode: string;
}

export class Test {
    id: string;
    status: string;
    assigneeId: string;
    cases?: Array<string>;
    patientId: number;
    name: string;
    scheduledFor: Date;
    panels?: Array<TestPanel>;
    individualTests?: Array<Test>;
    labOrderNumber?: string;
    priority?: string;
    collectionDate?: Date;
    collectionLocation?: string;
    testingLocationId?: string;
    testingSupervisor?: string;
    publicNote?: string;
    attachments?: Array<Attachment>;
    internalNote?: Array<InternalNote>;
}

export interface Attachment {
    id: string;
    url: string;
    filename: string;
    type: string;
}

export interface Test {
    id: string;
    name: string;
    resultValue?: number;
    resultIndicator?: string;
    comments?: string;
}

export interface TestPanel {
    id: string;
    tests: Array<Test>;
}

export class Imaging {
    id: string;
    status: string;
    patientId: number;
    imagingTypeId: string;
    imagingTypeDescription: string;
    imagingLocation: string;
    scheduledFor: Date;
    attachments?: Array<Attachment>;
    publicNote?: string;
    internalNotes?: Array<InternalNote>;
}

export interface InternalNote {
    id: string;
    createdOn: Date;
    createdBy: Date;
    note: string;
}

export class Wellness {
    patientId: number;
    goals: Array<Goal>;
    maintenance: Array<Maintenance>;
    immunizations: Array<Immunization>;
    activity?: string;
    sleep?: string;
    behavioral?: string;
    community?: string;
}

export interface Immunization {
    id: string;
    type: string;
    date: Date;
}

export interface Maintenance {
    id: string;
    type: string;
    date: Date;
}

export interface Goal {
    id: string;
    goal: string;
    status: string;
    note: string;
}

export class Other {
    social?: string;
    family?: string;
    allergies?: string;
}

export interface SingleSignOnInfo {
    clinicId: number;
    userId: number;
    ssoPhraseLength: number;
    singleSignOnCode: string;
    singleSignOnUserIdVerify: string;
    singleSignOnUrl: string;
}

export class PatientsState {
    isFetching: boolean;
    items: Array<Patient>;
    lastFetchError?: Error;
    ssoInfo?: SingleSignOnInfo;
    selectedPatient?: Patient;
}

function initialState(): PatientsState {
    return {
        isFetching: false,
        items: [],
        lastFetchError: undefined,
        ssoInfo: undefined,
        selectedPatient: undefined
    };
}

export default function reducer(state: PatientsState = initialState(), action: ActionResult<{}>) {

    switch (action.type) {
        case Actions.ActionType.FETCH_ALL_PATIENTS:
            return { ...state, isFetching: true };

        case Actions.ActionType.FETCH_ALL_PATIENTS_SUCCESS:
            return { ...state, isFetching: false, items: action.value };

        case Actions.ActionType.FETCH_ALL_PATIENTS_FAILURE:
            return { ...state, isFetching: false, lastFetchError: action.value };

        case Actions.ActionType.FETCH_PATIENT: {
            return { ...state, isFetching: true };
        }

        case Actions.ActionType.FETCH_PATIENT_SUCCESS: {
            const fetchedPatient = action.value as Patient;
            const index = state.items.findIndex((patient: Patient) => { 
                return patient.id === fetchedPatient.id;
            });

            if (index === -1) {
                return { ...state, items: [...state.items, fetchedPatient] };
            } else {
                const newItems = _.cloneDeep(state.items);
                newItems.splice(index, 1, fetchedPatient);
                return { ...state, isFetching: false, items: newItems };
            }
        }

        case Actions.ActionType.FETCH_PATIENT_FAILURE:
            return { ...state, isFetching: false, lastFetchError: action.value };

        case Actions.ActionType.SELECT_PATIENT:
            return { ...state, isFetching: false, selectedPatient: null };

        case Actions.ActionType.SELECT_PATIENT_SUCCESS:
            console.log('updated patient', action.value);
            return { ...state, isFetching: false, selectedPatient: action.value as Patient };

        case Actions.ActionType.SELECT_PATIENT_FAILURE:
            return { ...state, isFetching: false, lastFetchError: action.value as Error };

        case Actions.ActionType.UNSELECT_PATIENT:
            return { ...state, selectedPatient: undefined };

        default: 
            return state;
    }
}