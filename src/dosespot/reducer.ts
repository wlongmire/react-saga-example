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

export class DoseSpotState {
    sso: SingleSignOnInfo | null | undefined;
}

function initialState(): DoseSpotState {
    return {
        sso: {
            clinicId: 1,
            userId: 2,
            ssoPhraseLength: 32,
            singleSignOnCode: '',
            singleSignOnUserIdVerify: '',
            singleSignOnUrl: ''
        }
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