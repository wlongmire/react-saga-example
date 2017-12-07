import { ActionResult, Other } from '../common';

export module ActionType {
    export const ADD = 'other/ADD';
    export const LOAD_OTHER = 'other/LOAD_OTHER';
    export const LOAD_OTHER_SUCCESS = 'other/LOAD_OTHER_SUCCESS';
    export const LOAD_OTHER_FAILURE = 'other/LOAD_OTHER_FAILURE';
}

export const loadOtherSuccess = (other: Other): ActionResult<Other> => {
    return {
        type: ActionType.LOAD_OTHER_SUCCESS,
        value: other
    };
};

export const loadOther = (channelId: number): ActionResult<number> => {
    return {
        type: ActionType.LOAD_OTHER,
        value: channelId
    };
};

export const loadOtherFail = (error: Error): ActionResult<Error> => {
    return {
        type : ActionType.LOAD_OTHER_FAILURE,
        value : error
    };
};