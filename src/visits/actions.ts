import { ActionResult, Visit } from '../common';

export module ActionType {
    export const ADD_VISIT = 'visits/ADD_VISIT';
    export const ADD_VISIT_SUCCESS = 'visits/ADD_VISIT_SUCCESS';
    export const ADD_VISIT_FAIL = 'visits/ADD_VISIT_FAIL';
    export const UPDATE_VISIT = 'visits/UPDATE_VISIT';
    export const UPDATE_VISIT_SUCCESS = 'visits/UPDATE_VISIT_SUCCESS';
    export const UPDATE_VISIT_FAIL = 'visits/UPDATE_VISIT_FAIL';
}

export const addVisit = (visit: Visit): ActionResult<Visit> => {
    return {
        type: ActionType.ADD_VISIT,
        value: visit
    };
};

export const addVisitSuccess = (visit: Visit): ActionResult<Visit> => {
    return {
        type: ActionType.ADD_VISIT_SUCCESS,
        value: visit
    };
};

export const addVisitFail = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.ADD_VISIT_FAIL,
        value: e
    };
};

export const updateVisit = (visit: Visit): ActionResult<Visit> => {
    return {
        type: ActionType.UPDATE_VISIT,
        value: visit
    };
};

export const updateVisitSuccess = (visit: Visit): ActionResult<Visit> => {
    return {
        type: ActionType.UPDATE_VISIT_SUCCESS,
        value: visit
    };
};

export const updateVisitFail = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.UPDATE_VISIT_FAIL,
        value: e
    };
};
