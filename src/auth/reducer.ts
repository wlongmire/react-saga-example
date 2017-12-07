import * as Common from '../common';
import { ActionType } from './actions';
import { AuthInfo, Identity, AuthState } from '../common';

const fetchAuthFromLocalStorage = (): AuthInfo | undefined => {
    const authString = localStorage.getItem('auth');
    return authString ? JSON.parse(authString) as AuthInfo : undefined;
};

const fetchIdentityFromLocalStorage = (): Identity | undefined => {
    const identityString = localStorage.getItem('identity');
    return identityString ? JSON.parse(identityString) as Identity : undefined;
};

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
        authError: undefined,
        pending: false
    };
}

export default function reducer(state: AuthState = initialState(), action: Common.ActionResult<{}>) {
    switch (action.type) {
        case ActionType.LOGIN_SUCCESS:
            const authInfo = action.value as AuthInfo;
            return { 
                ...state, 
                isAuthenticated: true,
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
            };
        case ActionType.VERIFY_CODE_FAIL:
            return {
                ...state,
                clientTokenVerified: false,
                clientTokenVerificationError: action.value,
                isAuthenticated: false
            };
        case ActionType.FETCH_IDENTITY_SUCCESS:
            return {
                ...state,
                identity: action.value as Identity
            };
        default:
            return state;
    }
}