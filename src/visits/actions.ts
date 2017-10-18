// import * as Common from '../common';
// import * as Model from './model';
// import ApplicationState from '../common';
// /**
//  * Action Types for Visits
//  */

// const BASE_URL_VISITS = 'https://api.life.cheap/exposed/visits/5961834829465699'

// export module ActionType {
//     export const ADD = 'visits/ADD';
//     export const LOAD_ALL = 'visits/LOAD_ALL';
//     export const LOAD_ALL_COMPLETED = 'visits/LOAD_ALL_COMPLETED';
//     export const LOAD_ALL_FAILED = 'visits/LOAD_ALL_FAILED'
// }

// export const loadAllVisitsCompleted = (visits: Array<Model.VisitItem>): Common.ActionResult<Array<Model.VisitItem>> => {
//     return {
//         type: ActionType.LOAD_ALL_COMPLETED,
//         value: visits
//     };
// }

// export const loadAllVisits = (): Common.ActionResult<{}> => {
//     return {
//         type: ActionType.LOAD_ALL
//     };
// }

// export const loadAllFailed = (error: Error): Common.ActionResult<Error> => {
//     return {
//         type: ActionType.LOAD_ALL_FAILED,
//         value: error
//     };
// }

// export const add = (visit: ApplicationState.IVisit): Common.ActionResult<Model.VisitItem> => {
//     return {
//         type: ActionType.ADD,
//         value: visit
//     };
// }

// export const getAllVisits = () => {
//     return(dispatch:any) => {
//         dispatch(loadAllVisits)
//         return fetch(BASE_URL_VISITS, {
//             method : 'GET',
//             headers:{
//                 "Authorization": "Token 6ecc5c6a-3e3f-4aaf-bfd3-ba095aa2e62b'",
//                 'Content-Type': 'application/json'
//             },
//             mode: 'cors',
//             cache: 'default'
//         }).then((response:any)=>{
//             if (response.ok){
//                 return response.json()
//             }

//             return response.json().then((err:Error)=>{
//                 throw err;
//             })
//         }).then((visits:any)=>{
//             dispatch(loadAllVisitsCompleted(visits))
//         }).catch(err =>{
//             dispatch(loadAllFailed(err))
//         })    
//     }
// }