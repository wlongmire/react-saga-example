import * as Common from '../common';
import * as Model from './model';

/**
 * Action Types for Visits
 */

export module ActionType {
    export const ADD = 'visits/ADD';
    export const LOAD_ALL = 'visits/LOAD_ALL';
    export const LOAD_ALL_COMPLETED = 'visits/LOAD_ALL_COMPLETED';
    export const LOAD_ALL_FAILED = 'visits/LOAD_ALL_FAILED'
}

/**
 * Action Generators
 */

export class Action {
    /**
     * Add/ Create visit generator
     */
    public static add(visit:Model.VisitItem):Common.ActionResult<Model.VisitItem>{
        const action: Common.ActionResult<Model.VisitItem> ={
            type: ActionType.ADD,
            value: visit
        };
        return action;
    }

    public static loadAllVisits():Common.ActionResult<{}>{
        const action: Common.ActionResult<{}> = {
            type: ActionType.LOAD_ALL
        };
        return action;
    }

    public static loadAllVisitsCompleted(visitItems: Array<Model.VisitItem>):Common.ActionResult<Array<Model.VisitItem>>{
        const action : Common.ActionResult<Array<Model.VisitItem>> = {
            type: ActionType.LOAD_ALL_COMPLETED,
            value: visitItems
        };
        return action;
    }

    public static loadAllFailed(error: Error): Common.ActionResult<Error>{
        const action : Common.ActionResult<Error> = {
            type: ActionType.LOAD_ALL_FAILED,
            value: error
        };
        return action;
    }
}