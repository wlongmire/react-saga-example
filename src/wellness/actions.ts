import * as Common from '../common';

export module ActionType {
    export const ADD = 'wellness/ADD';
    export const LOAD_ALL = 'wellness/LOAD_ALL_WELLNESS';
    export const LOAD_ALL_DONE = 'wellness/LOAD_ALL_WELLNESS_COMPLETED';
    export const LOAD_ALL_FAILED = 'wellness/LOAD_ALL_FAILED'
}

export const loadAllWellnessCompleted = (wellness: Array<any>):Common.ActionResult<Array<any>> => {
    return{
        type: ActionType.LOAD_ALL_DONE,
        value: wellness
    }
}

export const loadAllWellness = () : Common.ActionResult<{}> =>{
    return{
        type: ActionType.LOAD_ALL
    }
}

export const loadAllWellnessFailed = (error: Error): Common.ActionResult<Error> => {
    return {
        type : ActionType.LOAD_ALL_FAILED,
        value : error
    }
}

// export const getAllWellness = () => {
//     return(dispatch:any) => {
//         dispatch(loadAllWellness)
//         return fetch(BASE_URL_WELLNESS, {
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
//         }).then((wellness:any)=>{
//             dispatch(loadAllWellnessCompleted(wellness))
//         }).catch(err =>{
//             dispatch(loadAllWellnessFailed(err))
//         })    
//     }
// }