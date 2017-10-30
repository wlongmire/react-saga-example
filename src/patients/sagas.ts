import * as api from '../common/api';
import * as Navigation from '../navigation';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { 
    ActionType, 
    fetchAllPatientsSuccess, 
    fetchAllPatientsFailure, 
    selectPatientSuccess, 
    selectPatientFailure,
    addVisitSuccess,
    addVisitFail,
    updateVisitSuccess,
    updateVisitFail
} from './actions';
import { ActionResult, ChannelVisit, Patient } from '../common';

function* onFetchPatients() {
    try {
        const patients = yield call(() => api.patients.fetchAll());
        yield(put(fetchAllPatientsSuccess(patients)));
    } catch (e) {
        yield(put(fetchAllPatientsFailure(e)));
    }
}

function* onSelectPatient(action: ActionResult<Patient>) {
    try {
        const patientArg = action.value as Patient;
        const patient = yield call(() => api.patients.fetchPatient(patientArg));
        yield(put(selectPatientSuccess(patient)));
    } catch (e) {
        yield(put(selectPatientFailure(e)));
    }
}

function* onAddVisit(action: ActionResult<ChannelVisit>) {
    try {
        if (!action.value) return;
        const {visit, channelId } = action.value;
        yield call(() => api.visits.saveVisit(visit, channelId));
        yield(put(addVisitSuccess(visit, channelId)));
    } catch (e) {
        yield(put(addVisitFail(e)));
    }
}

function* onSelectPatientSuccess(action: ActionResult<Patient>) {
    yield(put(Navigation.navigate('/app/patients/biodrive')));
}

function* onUpdateVisit(action: ActionResult<ChannelVisit>) {
    try {
        if (!action.value) return;
        const { visit, channelId } = action.value;
        yield call(() => api.visits.saveVisit(visit, channelId));
        yield(put(updateVisitSuccess(visit, channelId)));
    } catch (e) {
        yield(put(updateVisitFail(e)));
    }
}

function* watchFetchAllPatients() {
    yield takeEvery(ActionType.FETCH_ALL_PATIENTS, onFetchPatients);
}

function* watchSelectPatient() {
    yield takeEvery(ActionType.SELECT_PATIENT, onSelectPatient);
}

function* watchSelectPatientSuccess() {
    yield takeEvery(ActionType.SELECT_PATIENT_SUCCESS, onSelectPatientSuccess);
}

function* watchAddVisit() {
    yield takeEvery(ActionType.ADD_VISIT, onAddVisit);
}

function* watchUpdateVisit() {
    yield takeEvery(ActionType.UPDATE_VISIT, onUpdateVisit);
}

export default function* root() {
    yield all([
        fork(watchFetchAllPatients),
        fork(watchSelectPatient),
        fork(watchAddVisit),
        fork(watchUpdateVisit),
        fork(watchSelectPatientSuccess)
    ]);
}