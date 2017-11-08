import { ActionResult, TreatmentsState } from '../common';
import { ActionType } from './actions';

const initialState = (): TreatmentsState => {
    return {
        isFetching: false,
        items: [],
        error: null
    };
};

export default function reducer(state: TreatmentsState = initialState(), action: ActionResult<{}>) {
    switch (action.type) {
        case ActionType.FETCH_TREATMENTS:
            return { ...state, isFetching: true, error: null };
        case ActionType.FETCH_TREATMENTS_SUCCESS:
            return { ...state, items: action.value, isFetching: false, error: null };
        case ActionType.FETCH_TREATMENTS_FAIL:
            return { ...state, isFetching: false, error: action.value };
        default: 
            return state;
    }
}