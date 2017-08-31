import * as Common from '../common';
import * as Model from './models';

const BASE_URL = 'https://my-json-server.typicode.com/kimani-ndegwa/temp-lifeco/patients/'
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
    // Add the remaining actions for ensuring the add patients success and 
    // failure have a success and failure action
    export const LOAD_PATIENT = 'users/LOAD_PATIENT';
    export const LOAD_PATIENT_SUCCESS = 'users/LOAD_PATIENT_SUCCESS';
    export const LOAD_PATIENT_FAILURE = 'users/LOAD_PATIENT_FAILURE';

}


export const loadAllPatients = ():Common.ActionResult<{}> =>  {
    return {
        type: ActionType.LOAD_ALL_PATIENTS
    };
}

export const loadAllPatientsSuccess = (patients: Array<Model.Patient>): Common.ActionResult<Array<Model.Patient>> =>  {
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

export const loadPatient = ():Common.ActionResult<{}> => {
    return {
        type: ActionType.LOAD_PATIENT
    }
}

export const loadPatientSuccess = (patient:Model.Patient):Common.ActionResult<Model.Patient> => {
    return {
        type: ActionType.LOAD_PATIENT_SUCCESS,
        value: patient
    }
}

export const loadPatientFailure = (error: Error): Common.ActionResult<Error> => {
    return {
        type: ActionType.LOAD_PATIENT_FAILURE,
        value: error
    };
}


// Redux Thunk operations begin here
export const loadPatients = () => {
    return (dispatch:any) => {
        dispatch(loadAllPatients)
        return fetch(BASE_URL, {
            method: 'GET',
            headers:{
                'Access-Control-Allow-Origin':''
            }
        }).then((response:any)=>{
            console.log(response, 'Response here')
            if(response.ok){
                
                return response.json()
            }
            return response.json().then((err:Error)=>{
                throw new Error;
            })
        }).then((data:any) => {
            dispatch (loadAllPatientsSuccess(data))
        }).catch(err=> {
            console.log(err)
            dispatch(loadAllPatientsSuccess(err))
        })
    }
}

export const loadSinglePatient = (id:number) => {
    return(dispatch:any) => {
        dispatch(loadPatient)
        return fetch(BASE_URL + id.toString(), {
            method: 'GET',
            headers:{
                'Access-Control-Allow-Origin':'*'
            }
        }).then((response: any)=>{
            if(response.ok){
                return response.json()
            }
            return response.json().then((err:Error)=>{
                throw new Error;
            })
        }).then((patient:Model.Patient)=>{
            dispatch(loadPatientSuccess(patient))
        }).catch(err=>{
            dispatch(loadPatientFailure(err))
        })
    }
}