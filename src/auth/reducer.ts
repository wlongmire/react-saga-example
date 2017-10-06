import * as Common from '../common';
import { ActionType } from './actions';

export interface AuthState {
    isAuthenticated: boolean;
    userIdentity?: UserIdentity;
    authError?: string;
    clientToken?: string;
    clientTokenVerified?: boolean;
    clientTokenVerificationError?: string;
}

export class AuthInfo {
    clientToken: string;
    userIdentity: UserIdentity;

    constructor(clientToken: string, userIdentity: UserIdentity) {
        this.clientToken = clientToken;
        this.userIdentity = userIdentity;
    }
}

export class UserIdentity {
    roleId?: number;
    phoneHint?: string;
    userId?: number;
    userChannel?: number;

    // may need to add clinicId + clinicianId as well (if the user is a doctor)

    constructor(roleId?: number, phoneHint?: string, userId?: number, userChannel?: number) {
        this.roleId = roleId;
        this.phoneHint = phoneHint;
        this.userId = userId;
        this.userChannel = userChannel;
    }
}

export class AuthCredentials {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

function initialState(): AuthState {
    return {
        isAuthenticated: false, // check local storage + verified token
        clientToken: undefined,
        clientTokenVerified: undefined,
        clientTokenVerificationError: undefined,
        userIdentity: undefined,
        authError: undefined
    }
}

export default function reducer(state = initialState(), action: Common.ActionResult<{}>) {

    switch (action.type) {
        case ActionType.LOGIN_SUCCESS:
            const { clientToken, userIdentity } = <AuthInfo> action.value;
            return { 
                ...state, 
                isAuthenticated: false, // not until the token is also verified
                clientToken,
                userIdentity
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
                userIdentity: undefined,
                authError: undefined,
                clientTokenVerified: undefined,
                clientTokenVerificationError: undefined
            };
        case ActionType.VERIFY_CODE_SUCCESS:
            return {
                ...state,
                clientTokenVerified: true,
                clientTokenVerificationError: undefined,
                isAuthenticated: true
            }
        case ActionType.VERIFY_CODE_FAIL:
            return {
                ...state,
                clientTokenVerified: false,
                clientTokenVerificationError: action.value,
                isAuthenticated: false
            }
        case ActionType.LOGOUT_FAIL:
        default:
            return state;
    }

}