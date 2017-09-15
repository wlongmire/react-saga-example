import * as Common from '../common';
import * as Model from './models';

const BASE_URL = 'https://api.life.cheap/exposed/list_my_patients'
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
        const accessToken = localStorage.getItem('access_token');
        const headers = new Headers();
        headers.append('Authorization', `Token ${accessToken}`);
        return fetch(BASE_URL, {
            method: 'GET',
            headers,
            mode: 'cors',
            cache: 'default'
        }).then((response:any) => {
            if(response.ok) {
                return response.json()
            }
            return response.json().then((err:Error) => {
                throw new Error;
            })
        }).then((data:any) => {
            const patients = data.map((raw: any) => {
                return <Model.Patient>{
                    id: raw.user_id,
                    name: `${raw.first} ${raw.last}`,
                    primaryChannel: raw.primary_channel,
                    avatar: 'http://www.gravatar.com/avatar/1f27b03f119910811d8cc8ff9dc1e922?s=48&d=identicon' // replace with raw when available
                };
            });
            dispatch (loadAllPatientsSuccess(patients))
        }).catch(err => {
            dispatch(loadAllPatientsSuccess(err))
        })
    }
}

export const loadSinglePatient = (id:number) => {
    return(dispatch:any) => {
        dispatch(loadPatient)
        const accessToken = localStorage.getItem('access_token');
        const headers = new Headers();
        headers.append('Authorization', `Token ${accessToken}`);
        return fetch(BASE_URL + id.toString(), {
            method: 'GET',
            headers,
            mode: 'cors',
            cache: 'default'
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