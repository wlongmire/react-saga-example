import * as Common from '../common';
/**
 * Action Types for Visits
 */

export module ActionType {
    export const ADD = 'testOrders/ADD';
    export const LOAD_ALL = 'testOrders/LOAD_ALL';
    export const LOAD_ALL_COMPLETED = 'testOrders/LOAD_ALL_COMPLETED';
    export const LOAD_ALL_FAILED = 'testOrders/LOAD_ALL_FAILED';
}

export const loadAllTestOrdersCompleted = (testOrders: Array<any>): Common.ActionResult<Array<any>> => {
    return {
        type: ActionType.LOAD_ALL_COMPLETED,
        value: testOrders
    };
};

export const loadAllTestOrders = (): Common.ActionResult<{}> => {
    return {
        type: ActionType.LOAD_ALL
    };
};

export const loadAllFailed = (error: Error): Common.ActionResult<Error> => {
    return {
        type: ActionType.LOAD_ALL_FAILED,
        value: error
    };
};