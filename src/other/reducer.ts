import { ActionResult, OtherState } from '../common';
import { ActionType } from './actions';

const initialState = (): OtherState => {
    return {
        other: undefined
    };
}

export default function reducer(state = initialState(), action: ActionResult<{}>){
    switch(action.type){
    case ActionType.LOAD_OTHER:
        return { ...state, state}
    case ActionType.LOAD_OTHER_SUCCESS:
        return { ...state , other: action.value }
    case ActionType.LOAD_OTHER_FAILURE:
        return { ...state, error: action.value}
    default: 
        return state
    }
}