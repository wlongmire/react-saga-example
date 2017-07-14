import * as Model from './model';
import * as Common from '../common';

// initial reducer state
const initialState: Model.ReducerState = {};

/**
 * Redux reducer
 * @param state 
 * @param action 
 */
export function reducer(state: Model.ReducerState = initialState, action: Common.ActionResult<{}>) {
    switch (action.type) {
        default:
            return state;
    }
}
