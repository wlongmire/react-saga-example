import { ActionResult } from '../common';
import * as Actions from './actions';

export interface SingleSignOnInfo {
    clinicId: number,
    userId: number,
    ssoPhraseLength: number,
    singleSignOnCode: string,
    singleSignOnUserIdVerify: string,
    singleSignOnUrl: string
}

export interface SingleSignOnCredentials {
    clinicId: number,
    clinicianId: number
}

export class DoseSpotState {
    isFetching: boolean;
    sso: SingleSignOnInfo | null | undefined;
}

function initialState(): DoseSpotState {
    return {
        isFetching: false,
        sso: null
    }
}

export default function reducer(state = initialState(), action: ActionResult<{}>){
    switch (action.type) {
        case Actions.ActionType.FETCH_SSO_INFO_SUCCESS:
            return { ...state, sso: action.value}
        default:
            return state
    }
}