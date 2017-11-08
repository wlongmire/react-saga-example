
import { VisitsState } from '../common/models';
import { ActionResult } from '../common';
import { ActionType } from './actions';

const initialState = (): VisitsState => {
    return {
        isFetching: false,
        items: [],
        error: null
    };
};

export default function reducer(state: VisitsState = initialState(), action: ActionResult<{}>) {
    switch (action.type) {
        case ActionType.ADD_VISIT:
            return state;
        case ActionType.FETCH_VISITS:
            return { ...state, isFetching: true, error: null };
        case ActionType.FETCH_VISITS_SUCCESS:
            return { ...state, items: action.value, isFetching: false, error: null };
        case ActionType.FETCH_VISITS_FAIL:
            return { ...state, isFetching: false, error: action.value };
        default:
            return state;
    }
}