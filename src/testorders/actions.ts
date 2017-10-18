import * as Common from '../common';
/**
 * Action Types for Visits
 */

const BASE_URL_TEST_ORDERS = 'https://api.life.cheap/exposed/testorders/5961834829465699'

export module ActionType {
    export const ADD = 'testOrders/ADD';
    export const LOAD_ALL = 'testOrders/LOAD_ALL';
    export const LOAD_ALL_COMPLETED = 'testOrders/LOAD_ALL_COMPLETED';
    export const LOAD_ALL_FAILED = 'testOrders/LOAD_ALL_FAILED'
}

export const loadAllTestOrdersCompleted = (testOrders: Array<any>): Common.ActionResult<Array<any>> => {
    return {
        type: ActionType.LOAD_ALL_COMPLETED,
        value: testOrders
    };
}

export const loadAllTestOrders = (): Common.ActionResult<{}> => {
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

export const getAllTestOrders = () => {
    return(dispatch:any) => {
        dispatch(loadAllTestOrders)
        return fetch(BASE_URL_TEST_ORDERS, {
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
        }).then((testOrders:any)=>{
            dispatch(loadAllTestOrdersCompleted(testOrders))
        }).catch(err =>{
            dispatch(loadAllFailed(err))
        })    
    }
}