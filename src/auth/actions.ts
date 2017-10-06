import * as Common from '../common';
import { AuthInfo } from './reducer';
import { AuthCredentials } from './reducer';

export module ActionType {
    export const LOGIN = 'auth/LOGIN';
    export const LOGIN_SUCCESS = 'auth/SUCCESS';
    export const LOGIN_FAIL = 'auth/FAIL';
    export const LOGOUT = 'auth/LOGOUT';
    export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
    export const LOGOUT_FAIL = 'auth/LOGOUT_FAIL';
    export const FORGOT_PASSWORD = 'auth/FORGOT_PASSWORD';
    export const FORGOT_PASSWORD_SUCCESS = 'auth/FORGOT_PASSWORD_SUCCESS';
    export const FORGOT_PASSWORD_FAIL = 'auth/FORGOT_PASSWORD_FAIL';
    export const VERIFY_CODE = 'auth/VERIFY_CODE';
    export const VERIFY_CODE_SUCCESS = 'auth/VERIFY_CODE_SUCCESS';
    export const VERIFY_CODE_FAIL = 'auth/VERIFY_CODE_FAIL';
    export const RESEND_CODE = 'auth/RESEND_CODE';
    export const RESEND_CODE_SUCCESS = 'auth/RESEND_CODE_SUCCESS';
    export const RESEND_CODE_FAIL = 'auth/RESEND_CODE_FAIL';
}

export const login = (credentials: AuthCredentials): Common.ActionResult<AuthCredentials> => {
    return {
        type: ActionType.LOGIN,
        value: credentials
    };
};

export const loginSuccess = (authInfo: AuthInfo): Common.ActionResult<AuthInfo> => {
    return {
        type: ActionType.LOGIN_SUCCESS,
        value: authInfo
    };
};

export const loginFail = (error: string): Common.ActionResult<{}> => {
    return {
        type: ActionType.LOGIN_FAIL,
        value: error
    };
};

export const  logout = (): Common.ActionResult<{}> => {
    const action = {
        type: ActionType.LOGOUT
    };
    return action;
};

export const logoutSuccess = (): Common.ActionResult<{}> => {
    return {
        type: ActionType.LOGOUT_SUCCESS
    };
};

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
        type: ActionType.FORGOT_PASSWORD_FAIL,
        value: error
    }
}

export const verifyCode = (code: string): Common.ActionResult<string> => {
    return {
        type: ActionType.VERIFY_CODE,
        value: code
    }
}

export const verifyCodeSuccess = (): Common.ActionResult<{}> => {
    return {
        type: ActionType.VERIFY_CODE_SUCCESS
    }
}

export const verifyCodeFail = (e: Error): Common.ActionResult<Error> => {
    return {
        type: ActionType.VERIFY_CODE_FAIL,
        value: e
    }
}

export const resendCode = (): Common.ActionResult<{}> => {
    return {
        type: ActionType.RESEND_CODE
    }
}

export const resendCodeSuccess = (): Common.ActionResult<{}> => {
    return {
        type: ActionType.RESEND_CODE_SUCCESS
    }
}

export const resendCodeFail = (e: Error): Common.ActionResult<Error> => {
    return {
        type: ActionType.RESEND_CODE_FAIL,
        value: e
    }
}