import * as Actions from './actions';
import { ActionResult, DoseSpotState } from '../common';

function initialState(): DoseSpotState {
    return {
        isFetching: false,
        items: [],
        clinicians: [],
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