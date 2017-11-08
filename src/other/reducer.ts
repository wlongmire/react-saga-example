import { ActionResult, Other, OtherState } from '../common';
import { ActionType } from './actions';

const initialState = (): OtherState => {
    return {
        item: new Other()
    };
};

export default function reducer(state: OtherState = initialState(), action: ActionResult<{}>) {
    switch (action.type) {
        case ActionType.LOAD_OTHER:
            return { ...state, state };
        case ActionType.LOAD_OTHER_SUCCESS:
            return { ...state , item: action.value };
        case ActionType.LOAD_OTHER_FAILURE:
            return { ...state, error: action.value };
        default: 
            return state;
    }
}