import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { 
    ActionType, 
    fetchAllPatientsSuccess, 
    fetchAllPatientsFailure, 
    selectPatientSuccess, 
    selectPatientFailure 
} from './actions';
import { Patient } from './reducer';
import { ActionResult } from '../common';
import * as api from './service';

function* fetchPatients() {
    try {
        const patients = yield call(() => api.fetchAll());
        yield(put(fetchAllPatientsSuccess(patients)));
    } catch (e) {
        yield(put(fetchAllPatientsFailure(e)));
    }
}

function* selectPatient(action: ActionResult<Patient>) {
    try {
        const patientArg = action.value as Patient;
        const patient = yield call(() => api.fetchPatient(patientArg));
        yield(put(selectPatientSuccess(patient)));
    } catch (e) {
        yield(put(selectPatientFailure(e)));
    }
}

function* watchFetchAllPatients() {
    yield takeEvery(ActionType.FETCH_ALL_PATIENTS, fetchPatients);
}

function* watchSelectPatient() {
    yield takeEvery(ActionType.SELECT_PATIENT, selectPatient);
}

export default function* root() {
    yield all([
        fork(watchFetchAllPatients),
        fork(watchSelectPatient)
    ]);
}