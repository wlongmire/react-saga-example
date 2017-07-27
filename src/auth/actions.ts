import * as Common from '../common';
import { LoginCredentials } from '../services/auth';

/**
 * 
 */
export module ActionType {
    export const LOGIN = 'auth/LOGIN';
    export const LOGIN_SUCCESS = 'auth/SUCCESS';
    export const LOGIN_FAIL = 'auth/FAIL';
    export const LOGOUT = 'auth/LOGOUT';
    export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
    export const LOGOUT_FAIL = 'auth/LOGOUT_FAIL';
}

/**
 * 
 * @param credentials 
 */
export const login = (credentials: LoginCredentials): Common.ActionResult<LoginCredentials> => {
    return {
        type: ActionType.LOGIN,
        value: credentials
    };
};

/**
 * 
 * @param response 
 */
export const loginSuccess = (): Common.ActionResult<undefined> => {
    return {
        type: ActionType.LOGIN_SUCCESS
    };
};

/**
 * 
 * @param error 
 */
export const loginFail = (error: {}): Common.ActionResult<{}> => {
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