import * as Common from '../common';

export module ActionType {
    export const LOGIN = 'login/LOGIN';
    export const LOGIN_SUBMITTED = 'login/SUBMITTED';
    export const LOGIN_SUCCESS = 'login/SUCCESS';
    export const LOGIN_FAIL = 'login/FAIL';
}

export class Action {
    public static login(): Common.ActionResult<{}> {
        const action: Common.ActionResult<{}> = {
            type: ActionType.LOGIN
        };
        return action;
    }

    public static loginSubmitted(credentials: {}): Common.ActionResult<{}> {
        const action: Common.ActionResult<{}> = {
            type: ActionType.LOGIN_SUBMITTED,
            value: credentials
        };
        return action;
    }

    public static loginSuccess(results: {}): Common.ActionResult<{}> {
        const action: Common.ActionResult<{}> = {
            type: ActionType.LOGIN_SUCCESS,
            value: results
        };
        return action;
    }

    public static loginFail(error: {}): Common.ActionResult<{}> {
        const action: Common.ActionResult<{}> = {
            type: ActionType.LOGIN_FAIL,
            value: error
        };
        return action;
    }
}