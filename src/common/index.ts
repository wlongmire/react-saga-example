import * as utils from './utils';

export const Utils = {
    strEnum: utils.strEnum
};

export interface IAddress {
    streetAddress1: string;
    streetAddress2?: string;
    city: string;
    state: string;
    postalCode: string;
}

/**
 * Redux ActionResult interface
 */
export interface ActionResult<T> {
    type: string,
    value?: T
}

/**
 * EventStream Event interface
 */
export interface EventStreamEvent {

}

/**
 * Globals for the project
 */

declare module ApplicationState{
    interface IUser{
        id: number;
        first_name: string,
        last_name: string
    }

    interface IPatient extends IUser{
        kind: string;
    }

    interface IPatients{
        patients: Array<IPatient>
    }

    interface IDoctor extends IUser{
        kind: string;
    }

    interface ICase {
        id: number;
    }

    interface IState {
        patients: Array<IPatient>;
        doctors: Array<IDoctor>
        cases: Array<ICase>;
    }
}

export default ApplicationState;