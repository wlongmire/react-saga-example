import * as Common from '../common';
import * as Model from './model';

// const BASE_URL_RX = 'https://api.life.cheap/exposed/treatments/5961834829465699';

export module ActionType {
    export const ADD = 'rx/ADD';
    export const LOAD_ALL = 'rx/LOAD_ALL_TREATMENTS';
    export const LOAD_ALL_DONE = 'rx/LOAD_ALL_TREATMENTS_COMPLETED';
    export const LOAD_ALL_FAILED = 'rx/LOAD_ALL_FAILED'
    export const FETCH_SSO_INFO = 'rx/FETCH_SSO_INFO';
    export const FETCH_SSO_INFO_FAILED = 'rx/FETCH_SSO_INFO_FAILED';
    export const FETCH_SSO_INFO_SUCCESS = 'rx/FETCH_SSO_INFO_SUCCESS';
}

export const loadAllRxCompleted = (treatments: Array<any>):Common.ActionResult<Array<any>> => {
    return{
        type: ActionType.LOAD_ALL_DONE,
        value: treatments
    }
}

export const loadAllRx = () : Common.ActionResult<{}> =>{
    return {
        type: ActionType.LOAD_ALL
    }
}

export const loadAllRxFailed = (error: Error): Common.ActionResult<Error> => {
    return {
        type: ActionType.LOAD_ALL_FAILED,
        value: error
    }
}

export const fetchSingleSignOnInfo = (): Common.ActionResult<{}> => {
    return {
        type: ActionType.FETCH_SSO_INFO
    }
}

export const fetchSingleSignOnInfoFailed = (error: Error): Common.ActionResult<Error> => {
    return {
        type: ActionType.FETCH_SSO_INFO_FAILED,
        value: error
    }
}

export const fetchSingleSignOnInfoSuccess = (ssoInfo: Model.SingleSignOnInfo): Common.ActionResult<Model.SingleSignOnInfo> => {
    return {
        type: ActionType.FETCH_SSO_INFO_SUCCESS,
        value: ssoInfo
    }
} 

// export const getAllTreatments = () => {
//     return(dispatch:any) => {
//         dispatch(loadAllRx)
//         return fetch(BASE_URL_RX, {
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
//         }).then((treatments:any)=>{
//             dispatch(loadAllRxCompleted(treatments))
//         }).catch(err =>{
//             dispatch(loadAllRxFailed(err))
//         })    
//     }
// }