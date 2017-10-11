import { ActionResult } from '../common';
import { Patient } from './';

export module ActionType {
    export const ADD_PATIENT = 'patients/ADD_PATIENT';
    // Add the remaining actions for ensuring the add patients success and 
    // failure have a success and failure action
    export const FETCH_ALL_PATIENTS = 'patients/FETCH_ALL_PATIENTS';
    export const FETCH_ALL_PATIENTS_SUCCESS = 'patients/FETCH_ALL_PATIENTS_SUCCESS';
    export const FETCH_ALL_PATIENTS_FAILURE = 'patients/FETCH_ALL_PATIENTS_FAILURE';
    // Add the remaining actions for ensuring the add patients success and 
    // failure have a success and failure action
    export const FETCH_PATIENT = 'patients/FETCH_PATIENT';
    export const FETCH_PATIENT_SUCCESS = 'patients/FETCH_PATIENT_SUCCESS';
    export const FETCH_PATIENT_FAILURE = 'patients/FETCH_PATIENT_FAILURE';

    export const FETCH_SSO_INFO = 'patients/FETCH_SSO_INFO';
    export const FETCH_SSO_INFO_FAILED = 'patients/FETCH_SSO_INFO_FAILED';
    export const FETCH_SSO_INFO_SUCCESS = 'patients/FETCH_SSO_INFO_SUCCESS';

    export const SELECT_PATIENT = 'patients/SELECT_PATIENT';
    export const UNSELECT_PATIENT = 'patients/UNSELECT_PATIENT';
}

export const fetchAllPatients = (): ActionResult<{}> =>  {
    return {
        type: ActionType.FETCH_ALL_PATIENTS
    };
}

export const fetchAllPatientsSuccess = (patients: Array<Patient>): ActionResult<Array<Patient>> =>  {
    return   {
        type: ActionType.FETCH_ALL_PATIENTS_SUCCESS,
        value: patients
    };
}

export const fetchAllPatientsFailure = (error: Error): ActionResult<Error> => {
    return {
        type: ActionType.FETCH_ALL_PATIENTS_FAILURE,
        value: error
    };
}

export const fetchPatient = (patientId: number): ActionResult<{}> => {
    return {
        type: ActionType.FETCH_PATIENT,
        value: patientId
    }
}

export const fetchPatientSuccess = (patient: Patient): ActionResult<Patient> => {
    return {
        type: ActionType.FETCH_PATIENT_SUCCESS,
        value: patient
    }
}

export const fetchPatientFailure = (error: Error): ActionResult<Error> => {
    return {
        type: ActionType.FETCH_PATIENT_FAILURE,
        value: error
    };
}

export const selectPatient = (patient: Patient): ActionResult<Patient> => {
    return {
        type: ActionType.SELECT_PATIENT,
        value: patient
    }
}

export const unselectPatient = (patient: Patient): ActionResult<Patient> => {
    return {
        type: ActionType.UNSELECT_PATIENT,
        value: patient
    }
}
