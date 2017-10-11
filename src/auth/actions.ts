import { ActionResult } from '../common';
import { AuthCredentials, AuthInfo, Identity } from './reducer';

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
    export const FETCH_IDENTITY = 'auth/FETCH_IDENTITY';
    export const FETCH_IDENTITY_SUCCESS = 'auth/FETCH_IDENTITY_SUCCESS';
    export const FETCH_IDENTITY_FAIL = 'auth/FETCH_IDENTITY_FAIL';
}

export const login = (credentials: AuthCredentials): ActionResult<AuthCredentials> => {
    return {
        type: ActionType.LOGIN,
        value: credentials
    };
};

export const loginSuccess = (info: AuthInfo): ActionResult<AuthInfo> => {
    return {
        type: ActionType.LOGIN_SUCCESS,
        value: info
    };
};

export const loginFail = (error: string): ActionResult<{}> => {
    return {
        type: ActionType.LOGIN_FAIL,
        value: error
    };
};

export const  logout = (): ActionResult<{}> => {
    const action = {
        type: ActionType.LOGOUT
    };
    return action;
};

export const logoutSuccess = (): ActionResult<{}> => {
    return {
        type: ActionType.LOGOUT_SUCCESS
    };
};

export const logoutFail = (e: Error): ActionResult<{}> => {
    return {
        type: ActionType.LOGOUT_FAIL,
        value: e
    };
};

export const forgotPassword = (email: string): ActionResult<string> => {
    return {
        type: ActionType.FORGOT_PASSWORD,
        value: email
    }
}

export const forgotPasswordSuccess = (): ActionResult<{}> => {
    return {
        type: ActionType.FORGOT_PASSWORD_SUCCESS
    }
}

export const forgotPasswordFail = (error: Error): ActionResult<Error> => {
    return {
        type: ActionType.FORGOT_PASSWORD_FAIL,
        value: error
    }
}

export const verifyCode = (code: string): ActionResult<string> => {
    return {
        type: ActionType.VERIFY_CODE,
        value: code
    }
}

export const verifyCodeSuccess = (): ActionResult<{}> => {
    return {
        type: ActionType.VERIFY_CODE_SUCCESS
    }
}

export const verifyCodeFail = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.VERIFY_CODE_FAIL,
        value: e
    }
}

export const resendCode = (): ActionResult<{}> => {
    return {
        type: ActionType.RESEND_CODE
    }
}

export const resendCodeSuccess = (): ActionResult<null> => {
    return {
        type: ActionType.RESEND_CODE_SUCCESS
    }
}

export const resendCodeFail = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.RESEND_CODE_FAIL,
        value: e
    }
}

export const fetchIdentity = (): ActionResult<null> => {
    return {
        type: ActionType.FETCH_IDENTITY
    }
}

export const fetchIdentitySuccess = (identity: Identity): ActionResult<Identity> => {
    return {
        type: ActionType.FETCH_IDENTITY_SUCCESS,
        value: identity
    }
}

export const fetchIdentityFail = (error: Error): ActionResult<Error> => {
    return {
        type: ActionType.FETCH_IDENTITY_FAIL,
        value: error
    }
}