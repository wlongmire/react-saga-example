// import * as Common from '../common';
// import * as Model from './model';

// /**
//  * Action types.
//  */
// export module ActionType {  
//     export const ADD = 'cases/ADD';
//     export const LOAD_ALL = 'cases/LOAD_ALL';
//     export const LOAD_ALL_COMPLETED = 'cases/LOAD_ALL_COMPLETED';
//     export const LOAD_ALL_FAILED = 'cases/LOAD_ALL_FAILED';
// }

// /**
//  * Action generators.
//  */
// export class Action {

//     /**
//      * Sample action generator
//      * @param c 
//      */
//     public static add(c: Model.CaseItem): Common.ActionResult<Model.CaseItem> {
//         const action: Common.ActionResult<Model.CaseItem> = {
//             type: ActionType.ADD,
//             value: c
//         };
//         return action;
//     }

//     /**
//      * 
//      */
//     public static loadAll(): Common.ActionResult<{}> {
//         const action: Common.ActionResult<{}> = {
//             type: ActionType.LOAD_ALL
//         };
//         return action;
//     }

//     /**
//      * 
//      * @param items 
//      */
//     public static loadAllCompleted(items: Array<Model.CaseItem>): Common.ActionResult<Array<Model.CaseItem>> {
//         const action: Common.ActionResult<Array<Model.CaseItem>> = {
//             type: ActionType.LOAD_ALL_COMPLETED,
//             value: items
//         };
//         return action;
//     }

//     /**
//      * 
//      * @param error 
//      */
//     public static loadAllFailed(error: Error): Common.ActionResult<Error> {
//         const action: Common.ActionResult<Error> = {
//             type: ActionType.LOAD_ALL_FAILED,
//             value: error
//         };
//         return action;
//     }
// }