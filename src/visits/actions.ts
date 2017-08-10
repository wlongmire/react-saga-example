import * as Common from '../common';
import * as Model from './model';
import ApplicationState from '../common';
/**
 * Action Types for Visits
 */

export module ActionType {
    export const ADD = 'visits/ADD';
    export const LOAD_ALL = 'visits/LOAD_ALL';
    export const LOAD_ALL_COMPLETED = 'visits/LOAD_ALL_COMPLETED';
    export const LOAD_ALL_FAILED = 'visits/LOAD_ALL_FAILED'
}

export const loadAllVisitsCompleted = (visits: Array<Model.VisitItem>): Common.ActionResult<Array<Model.VisitItem>> => {
    return {
        type: ActionType.LOAD_ALL_COMPLETED,
        value: visits
    };
}

export const loadAllVisits = (): Common.ActionResult<{}> => {
    return {
        type: ActionType.LOAD_ALL
    };
}

export const loadAllFailed = (error: Error): Common.ActionResult<Error> => {
    return {
        type: ActionType.LOAD_ALL_FAILED,
        value: error
    };
}

export const add = (visit: ApplicationState.IVisit): Common.ActionResult<Model.VisitItem> => {
    return {
        type: ActionType.ADD,
        value: visit
    };
}