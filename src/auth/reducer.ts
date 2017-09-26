import * as Common from '../common';
import { ActionType } from './actions';

export interface AuthState {
    isAuthenticated: boolean;
    clientToken?: string;
    userRole?: number;
    userChannel?: number;
    authError?: string;
}

export interface AuthInfo {
    clientToken: string;
    userRole: number;
    userChannel: number;
}

// initial reducer state
const initialState: AuthState = {
    isAuthenticated: false,
    clientToken: undefined,
    userRole: undefined,
    userChannel: undefined,
    authError: undefined
};

/**
 * Redux reducer
 * @param state
 * @param action 
 */
export default function reducer(state: AuthState = initialState, action: Common.ActionResult<{}>) {
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
                isAuthenticated: false,
                authError: action.value
            };
        case ActionType.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                clientToken: undefined,
                userRole: undefined,
                userChannel: undefined,
                authError: undefined
            };
        case ActionType.LOGOUT_FAIL:
            return state;
        default:
            return state;
    }

}