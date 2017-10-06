import { ActionResult } from '../common';
import * as Actions from './actions';

export interface Patient {
    id: number;
    name: string;
    primaryChannel: number;
    age?: string;
    gender?: string;
    avatar?: string;
    sso?: SingleSignOnInfo;
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
    lastFetchError: Error | undefined | null;
    ssoInfo: SingleSignOnInfo | undefined | null;
}

function initialState(): PatientsState {
    return {
        isFetching: false,
        items: [],
        lastFetchError: null,
        ssoInfo: null
    }
}

export default function reducer(state = initialState(), action: ActionResult<{}>){

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

        default: 
            return state;
    }
}