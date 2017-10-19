export * from './models';
export * from './utils';
export { default as history } from './history';
export * from './UIComponents';

/**
 * Redux ActionResult interface
 */
export class ActionResult<T> {
    type: string;
    value?: T;
};

/**
 * EventStream Event interface
 */
export interface EventStreamEvent {

};
/**
 * Globals for the project
 */

declare module ApplicationState {
    interface IUser{
        id?: number;
        name: string;
    }

    interface IVisit{
        id: number;
        status: string;

    }

    interface IPatient extends IUser{
    }

    interface IPatients{
        patients: Array<IPatient>
    }

    interface IDoctor extends IUser {
        kind: string;
    }

    interface ICase {
        id: number;
    }

    interface Rx {

    }

    interface Wellness {

    }

    interface TestOrder {

    }

    interface Other {

    }
    /**
     * To improve on pattern here
     */
    interface IState {
        patients?: Array<IPatient>;
        doctors?: Array<IDoctor>;
        cases?: Array<ICase>;
        visits?: Array<IVisit>;
        patient?: IPatient;
        treatments?: Array<Rx>;
        wellness?: Array<Wellness>;
        testorders?: Array<TestOrder>;
        others?: Array<Other>
    }
}

export default ApplicationState;