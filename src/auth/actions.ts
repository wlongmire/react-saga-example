import * as Common from '../common';
import { AuthLoginCredentials } from '../services/auth';
import { AuthInfo } from './reducer';

/**
 * Action Types
 */
export module ActionType {
    export const LOGIN = 'auth/LOGIN';
    export const LOGIN_SUCCESS = 'auth/SUCCESS';
    export const LOGIN_FAIL = 'auth/FAIL';
    export const LOGOUT = 'auth/LOGOUT';
    export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
    export const LOGOUT_FAIL = 'auth/LOGOUT_FAIL';
    export const FORGOT_PASSWORD = 'auth/FORGOT_PASSWORD';
    export const FORGOT_PASSWORD_SUCCESS = 'auth/FORGOT_PASSWORD_SUCCESS';
    export const FORGOT_PASSWORD_FAILURE = 'auth/FORGOT_PASSWORD_FAILURE';
}

/**
 * 
 * @param credentials 
 */
export const login = (credentials: AuthLoginCredentials): Common.ActionResult<AuthLoginCredentials> => {
    return {
        type: ActionType.LOGIN,
        value: credentials
    };
};

/**
 * 
 * @param response 
 */
export const loginSuccess = (authInfo: AuthInfo): Common.ActionResult<AuthInfo> => {
    return {
        type: ActionType.LOGIN_SUCCESS,
        value: authInfo
    };
};

/**
 * 
 * @param error 
 */
export const loginFail = (error: string): Common.ActionResult<{}> => {
    return {
        type: ActionType.LOGIN_FAIL,
        value: error
    };
};

/**
 * 
 */
export const  logout = (): Common.ActionResult<{}> => {
    const action = {
        type: ActionType.LOGOUT
    };
    return action;
};

/**
 * 
 */
export const logoutSuccess = (): Common.ActionResult<{}> => {
    return {
        type: ActionType.LOGOUT_SUCCESS
    };
};

/**
 * 
 * @param e 
 */
export const logoutFail = (e: Error): Common.ActionResult<{}> => {
    return {
        type: ActionType.LOGOUT_FAIL,
        value: e
    };
};

export const forgotPassword = (email: string): Common.ActionResult<string> => {
    return {
        type: ActionType.FORGOT_PASSWORD,
        value: email
    }
}

export const forgotPasswordSuccess = (): Common.ActionResult<{}> => {
    return {
        type: ActionType.FORGOT_PASSWORD_SUCCESS
    }
}

export const forgotPasswordFail = (error: Error): Common.ActionResult<Error> => {
    return {
        type: ActionType.FORGOT_PASSWORD_FAILURE,
        value: error
    }
}