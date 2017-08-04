import * as Common from '../common';
import ApplicationState from '../common';

// initial reducer state
const initialState = (state: ApplicationState.IState) => state.cases;

/**
 * Redux reducer
 * @param state 
 * @param action 
 */
export function reducer(state = initialState, action: Common.ActionResult<{}>) {
    switch (action.type) {
        default:
            return state;
    }
}