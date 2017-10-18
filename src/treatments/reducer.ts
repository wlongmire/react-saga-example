import * as Common from '../common';
import * as Actions from './actions';

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
    daysSupply: number;
    endOn: Date;
    patientId?: number;
}


export function reducer(state = {}, action: Common.ActionResult<{}>){
    switch(action.type){
    case Actions.ActionType.LOAD_ALL:
        return { ...state, state}
    case Actions.ActionType.LOAD_ALL_DONE:
        return { ...state , treatments: action.value }
    case Actions.ActionType.LOAD_ALL_FAILED:
        return { ...state, error: action.value}
    case Actions.ActionType.FETCH_SSO_INFO_SUCCESS:
        return { ...state, singleSignOnInfo: action.value}
    default: 
        return state
    }
}