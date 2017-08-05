import * as Common from '../common';
import { ActionType } from './actions';
import { AuthState, AuthInfo } from './model';

// initial reducer state
const initialState: AuthState = {
    isAuthenticated: false,
    clientToken: undefined,
    userRole: undefined,
    userChannel: undefined
};

/**
 * Redux reducer
 * @param state 
 * @param action 
 */
export function reducer(state: AuthState = initialState, action: Common.ActionResult<{}>) {
    switch (action.type) {
        case ActionType.LOGIN_SUCCESS:
            const { clientToken, userRole, userChannel } = <AuthInfo> action.value;
            return { 
                ...state, 
                isAuthenticated: true,
                clientToken,
                userRole,
                userChannel
            };
        case ActionType.LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false
            };
        case ActionType.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                clientToken: undefined,
                userRole: undefined,
                userChannel: undefined
            };
        case ActionType.LOGOUT_FAIL:
            return state;
        default:
            return state;
    }

}