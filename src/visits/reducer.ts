import * as Common from '../common';
import * as Actions from './actions';
import ApplicationState from '../common';

//Initial reducer state

// const initialState = (state:ApplicationState.IState) => (state.visits = [] );

/**
 * Redux reducer
 */

export function reducer(state: ApplicationState.IState = {visits : []}, action: Common.ActionResult<{}>) {
    console.log(action);
    switch (action.type) {
        case Actions.ActionType.ADD:
            return { ...state, visit: action.value }
        case Actions.ActionType.LOAD_ALL_COMPLETED:
            console.log('reducer...completed');
            return { ...state, visits: action.value }
        case Actions.ActionType.LOAD_ALL_FAILED:
            return { ...state, error: action.value }
        default:
            return state;
    }
}