import * as Common from '../common';

/**
 * Redux reducer
 * @param state 
 * @param action 
 */
export function reducer(state = [], action: Common.ActionResult<{}>) {
    switch (action.type) {
        default:
            return state;
    }
}