import { ActionResult } from '../common';
import * as Actions from './actions';
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
}

export interface SingleSignOnInfo {
    clinicId: number,
    userId: number,
    ssoPhraseLength: number,
    singleSignOnCode: string,
    singleSignOnUserIdVerify: string,
    singleSignOnUrl: string
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
    }
}

export default function reducer(state = initialState(), action: ActionResult<{}>) {

    switch(action.type) {
        case Actions.ActionType.FETCH_ALL_PATIENTS:
            return { ...state, isFetching: true }

        case Actions.ActionType.FETCH_ALL_PATIENTS_SUCCESS:
            return { ...state, isFetching: false, items: action.value }

        case Actions.ActionType.FETCH_ALL_PATIENTS_FAILURE:
            return { ...state, isFetching: false, lastFetchError: action.value }

        case Actions.ActionType.FETCH_PATIENT: {
            return { ...state, isFetching: true }
        }

        case Actions.ActionType.FETCH_PATIENT_SUCCESS: {
            const fetchedPatient = <Patient>action.value;
            const index = state.items.findIndex((patient: Patient) => { 
                return patient.id == fetchedPatient.id;
            });

            if (index == -1) {
                return { ...state, items: [ state.items, fetchedPatient] };
            } else {
                const newItems = state.items.slice(index, index + 1);
                newItems.splice(index, 0, fetchedPatient);
                return { ...state, isFetching: false, items: newItems };
            }
        }

        case Actions.ActionType.FETCH_PATIENT_FAILURE:
            return { ...state, isFetching: false, lastFetchError: action.value }

        case Actions.ActionType.SELECT_PATIENT:
            return { ...state, selectedPatient: action.value as Patient };

        case Actions.ActionType.UNSELECT_PATIENT:
            return { ...state, selectedPatient: undefined };

        default: 
            return state;
    }
}