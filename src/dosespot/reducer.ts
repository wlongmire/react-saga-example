import { ActionType } from './actions';
import { ActionResult, DosespotClinicianStatus, DosespotState } from '../common';

function initialState(): DosespotState {
    return {
        isFetching: false,
        medications: [],
        error: undefined
    };
}

export default function reducer(state: DosespotState = initialState(), action: ActionResult<{}>) {
    switch (action.type) {
        case ActionType.FETCH_CLINICIAN_STATUS:
            return { ...state, isFetching: true, error: undefined };
        case ActionType.FETCH_CLINICIAN_STATUS_SUCCESS:
            console.log('value', action.value);
            return { 
                ...state, 
                isFetching: false, 
                status: action.value as DosespotClinicianStatus,
                error: undefined
            };
        case ActionType.FETCH_CLINICIAN_STATUS_FAIL:
            return { ...state, isFetching: false, error: action.value as Error };
        default:
            return state;
    }
}