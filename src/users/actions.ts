import * as Common from '../common';
import * as Model from './models';

/**
 * Action types for Patients.
 */
export module ActionType {
    export const ADD_PATIENT = 'users/ADD_PATIENT';
    // Add the remaining actions for ensuring the add patients success and 
    // failure have a success and failure action
    export const LOAD_ALL_PATIENTS = 'users/LOAD_ALL_PATIENTS';
    export const LOAD_ALL_PATIENTS_SUCCESS = 'users/LOAD_ALL_PATIENTS_SUCCESS';
    export const LOAD_ALL_PATIENTS_FAILURE = 'users/LOAD_ALL_PATIENTS_FAILURE';
}


export const loadAllPatients = ():Common.ActionResult<{}> =>  {
    return {
        type: ActionType.LOAD_ALL_PATIENTS
    };
}

export const loadAllPatientsSuccess = (patients: Array<Model.IPatient>): Common.ActionResult<Array<Model.IPatient>> =>  {
    return   {
        type: ActionType.LOAD_ALL_PATIENTS_SUCCESS,
        value: patients
    };
}

export const loadAllPatientsFailure = (error: Error): Common.ActionResult<Error> => {
    return {
        type: ActionType.LOAD_ALL_PATIENTS_FAILURE,
        value: error
    };
}


// Redux Thunk operations begin here
export const loadPatients = () => {
    return (dispatch:any) => {
        dispatch(loadAllPatients)
        return fetch('https://api.myjson.com/bins/njw75', {
            method: 'GET',
        }).then((response:any)=>{
            if(response.ok){
                return response.json()
            }
            return response.json().then((err:Error)=>{
                throw new Error;
            })
        }).then((data:any) => {
            dispatch (loadAllPatientsSuccess(data))
        }).catch(err=> {
            dispatch(loadAllPatientsSuccess(err))
        })
    }
}