import { Patient } from './patient';
import { SingleSignOnInfo } from './single-sign-on-info';

export class PatientsState {
    isFetching: boolean;
    items: Array<Patient>;
    lastFetchError?: Error;
    ssoInfo?: SingleSignOnInfo;
    selectedPatientId?: number;
}