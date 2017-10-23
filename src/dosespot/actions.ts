import { ActionResult, SingleSignOnInfo } from '../common';

export module ActionType {
    export const FETCH_SSO_INFO = 'patients/FETCH_SSO_INFO';
    export const FETCH_SSO_INFO_FAILED = 'patients/FETCH_SSO_INFO_FAILED';
    export const FETCH_SSO_INFO_SUCCESS = 'patients/FETCH_SSO_INFO_SUCCESS';
}

export const fetchSingleSignOnInfo = (): ActionResult<{}> => {
    return {
        type: ActionType.FETCH_SSO_INFO
    }
}

export const fetchSingleSignOnInfoFailed = (error: Error): ActionResult<Error> => {
    return {
        type: ActionType.FETCH_SSO_INFO_FAILED,
        value: error
    }
}

export const fetchSingleSignOnInfoSuccess = (ssoInfo: SingleSignOnInfo): ActionResult<SingleSignOnInfo> => {
    return {
        type: ActionType.FETCH_SSO_INFO_SUCCESS,
        value: ssoInfo
    }
} 