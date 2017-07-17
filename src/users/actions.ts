import * as Common from '../common';
import * as Model from './models';

/**
 * Action types for Patients.
 */

export module ActionType {
    export const ADD_PATIENT = 'ADD_PATIENT';
    // Add the remaining actions for ensuring the add patients success and 
    // failure have a success and failure action
    export const LOAD_ALL_PATIENTS = 'LOAD_ALL_PATIENTS';
    export const LOAD_ALL_PATIENTS_SUCCESS = 'LOAD_ALL_PATIENTS_SUCCESS';
    export const LOAD_ALL_PATIENTS_FAILURE = 'LOAD_ALL_PATIENTS_FAILURE'
}

/**
 * Action Generators
 */

export class Action {
    /**
      * Add patient generator.
      * To be updated to be able to add all other functionality as well. 
      */
    public static addPatient(patient: Model.Patient): Common.ActionResult<Model.Patient> {
        const action: Common.ActionResult<Model.Patient> = {
            type: ActionType.ADD_PATIENT,
            value: patient
        }
        return action;
    }
    /**
     * Static method to be able to load all patients.
     */
    public static loadAllPatients(): Common.ActionResult<{}> {
        const action: Common.ActionResult<{}> = {
            type: ActionType.LOAD_ALL_PATIENTS
        };
        return action;
    }
    /**
     * Static method to return a successful request when patients
     * have been loaded.
     */
    public static loadAllPatientsSuccess(patients: Array<Model.Patient>): Common.ActionResult<Array<Model.Patient>> {
        const action: Common.ActionResult<Array<Model.Patient>> = {
            type: ActionType.LOAD_ALL_PATIENTS_SUCCESS,
            value: patients
        }
        return action;
    }
    /**
     * Static method to handle the error thrown back with the error
     */
    public static loadAllPatientsFailure(error: Error): Common.ActionResult<Error> {
        const action: Common.ActionResult<Error> = {
            type: ActionType.LOAD_ALL_PATIENTS_FAILURE,
            value: error
        };
        return action;
    }

}