import * as Common from '../common';


const BASE_URL_OTHERS= 'https://api.life.cheap/exposed/others/5961834829465699';

export module ActionType {
    export const ADD = 'others/ADD';
    export const LOAD_ALL = 'others/LOAD_ALL_WELLNESS';
    export const LOAD_ALL_DONE = 'others/LOAD_ALL_WELLNESS_COMPLETED';
    export const LOAD_ALL_FAILED = 'others/LOAD_ALL_FAILED'
}

export const loadAllOthersCompleted = (others: Array<any>):Common.ActionResult<Array<any>> => {
    return{
        type: ActionType.LOAD_ALL_DONE,
        value: others
    }
}

export const loadAllOthers = () : Common.ActionResult<{}> =>{
    return{
        type: ActionType.LOAD_ALL
    }
}

export const loadAllOthersFailed = (error: Error): Common.ActionResult<Error> => {
    return {
        type : ActionType.LOAD_ALL_FAILED,
        value : error
    }
}

export const getAllOthersItems = () => {
    return(dispatch:any) => {
        dispatch(loadAllOthers)
        return fetch(BASE_URL_OTHERS, {
            method : 'GET',
            headers:{
                "Authorization": "Token 6ecc5c6a-3e3f-4aaf-bfd3-ba095aa2e62b'",
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default'
        }).then((response:any)=>{
            if (response.ok){
                return response.json()
            }

            return response.json().then((err:Error)=>{
                throw err;
            })
        }).then((others:any)=>{
            dispatch(loadAllOthersCompleted(others))
        }).catch(err =>{
            dispatch(loadAllOthersFailed(err))
        })    
    }
}