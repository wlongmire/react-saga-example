import { ActionResult, DoseSpotState } from '../common';
import { ActionType } from './actions';

// export interface DoseSpotStatus {
//     clinicianId: number;
//     refillRequestsCount: number;
//     transactionErrorsCount: number;
//     pendingPrescriptionsCount: number;
//     url: string;
// }

// export interface DoseSpotState {
//     items: DoseSpotStatus[];
//     isFetching: boolean;
//     clinicians: number[]
// }

function initialState(): DoseSpotState {
    return {
        items: [],
        isFetching: false,
        clinicians: [],
        sso: undefined
    }
}

export default function reducer(state = initialState(), action: ActionResult<any>) {

    switch(action.type) {
        case ActionType.FETCH_DOSESPOT_STATUS:
            return { ...state, isFetching: true };

        case ActionType.FETCH_DOSESPOT_STATUS_SUCCESS:
            return { ...state, isFetching: false, items: [action.value] };

        case ActionType.FETCH_DOSESPOT_STATUS_FAILURE:
            return { ...state, isFetching: false };
            
        default:
            return { ...state };
    }
}