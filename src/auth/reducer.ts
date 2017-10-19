import * as Common from '../common';
import { ActionType } from './actions';

export class AuthInfo {
    clientToken: string;
    userId: number;
    userChannel: number;
    phoneHint?: string;
    roleId?: number;

    constructor(
        clientToken: string, 
        userId: number,
        userChannel: number,
        phoneHint?: string,
        roleId?: number
    ) {
        this.clientToken = clientToken;
        this.userId = userId;
        this.userChannel = userChannel;
        this.phoneHint = phoneHint;
        this.roleId = roleId
    }
}

export class Identity {
    channelId: number;
    roleId?: number;
    roleName?: string;
    userId: number;
    userInfo?: IdentityUserInfo;    
}

export interface IdentityUserInfo {
    email: string;
    first?: string;
    last?: string;
    phone?: string;
    clinicId?: string;
    clinicianId?: string;
}

export class AuthCredentials {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

export interface AuthState {
    isAuthenticated: boolean;
    auth?: AuthInfo,
    identity?: Identity;
    authError?: string;
    clientToken?: string;
    clientTokenVerified?: boolean;
    clientTokenVerificationError?: string;
}

const fetchAuthFromLocalStorage = (): AuthInfo | undefined => {
    const authString = localStorage.getItem('auth');
    return authString ? JSON.parse(authString) as AuthInfo : undefined;
}

const fetchIdentityFromLocalStorage = (): Identity | undefined => {
    const identityString = localStorage.getItem('identity');
    return identityString ? JSON.parse(identityString) as Identity : undefined;
}

function initialState(): AuthState {
    const auth = fetchAuthFromLocalStorage();
    const identity = fetchIdentityFromLocalStorage();

    return {
        isAuthenticated: auth && auth.clientToken ? true : false, // check local storage + verified token
        auth: auth,
        clientToken: undefined,
        clientTokenVerified: undefined,
        clientTokenVerificationError: undefined,
        identity: identity,
        authError: undefined
    }
}

export default function reducer(state = initialState(), action: Common.ActionResult<{}>) {

    switch (action.type) {

        case ActionType.LOGIN_SUCCESS:
            const authInfo = action.value as AuthInfo;
            return { 
                ...state, 
                isAuthenticated: false, // not until the token is also verified
                auth: authInfo,
                clientToken: authInfo.clientToken,
                clientTokenVerified: undefined,
                clientTokenVerificationError: undefined
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
                auth: undefined,
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
        
        case ActionType.FETCH_IDENTITY_SUCCESS:
            return {
                ...state,
                identity: action.value as Identity
            }

        default:
            return state;
    }

}