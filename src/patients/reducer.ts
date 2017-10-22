import * as Actions from './actions';
import * as _ from 'lodash';
import { ActionResult, Patient, PatientsState } from '../common';
import {  } from '../chat';

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