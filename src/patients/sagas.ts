import * as api from '../common/api';
import navigation from '../navigation';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { 
    ActionType, 
    fetchAllPatientsSuccess, 
    fetchAllPatientsFailure, 
    selectPatientSuccess,
    selectPatientFailure,
    unselectPatientSuccess,
    unselectPatientFailure,
    addVisitSuccess,
    addVisitFail,
    updateVisitSuccess,
    updateVisitFail
} from './actions';
import { ActionResult, ChannelVisit } from '../common';

function* onFetchPatients() {
    try {
        const patients = yield call(() => api.patients.fetchAll());
        yield(put(fetchAllPatientsSuccess(patients)));
    } catch (e) {
        yield(put(fetchAllPatientsFailure(e)));
    }
}

function* onSelectPatient(action: ActionResult<number>) {
    try {
        const patientId = action.value;
        yield(put(navigation.actions.navigate(`/app/patient-detail/${patientId}`)));
        yield(put(selectPatientSuccess(patientId || -1)));
    } catch (e) {
        yield(put(selectPatientFailure(e)));
    }
}

function* onAddVisit(action: ActionResult<ChannelVisit>) {
    try {
        if (!action.value) {
            return;
        }
        const {visit, channelId } = action.value;
        yield call(() => api.visits.saveVisit(visit, channelId));
        yield(put(addVisitSuccess(visit, channelId)));
    } catch (e) {
        yield(put(addVisitFail(e)));
    }
}

function* onUpdateVisit(action: ActionResult<ChannelVisit>) {
    try {
        if (!action.value) {
            return;
        }
        const { visit, channelId } = action.value;
        yield call(() => api.visits.saveVisit(visit, channelId));
        yield(put(updateVisitSuccess(visit, channelId)));
    } catch (e) {
        yield(put(updateVisitFail(e)));
    }
}

function* onUnselectPatient(action: ActionResult<number>) {
    try {
        if (!action.value) {
            return;
        }
        const patientId = action.value;
        yield(put(navigation.actions.navigate(`/app/patients`)));
        yield(put(unselectPatientSuccess(patientId)));
    } catch (e) {
        yield(put(unselectPatientFailure(e)));
    }
}

function* watchFetchAllPatients() {
    yield takeEvery(ActionType.FETCH_ALL_PATIENTS, onFetchPatients);
}

function* watchSelectPatient() {
    yield takeEvery(ActionType.SELECT_PATIENT, onSelectPatient);
}

function* watchUnselectPatient() {
    yield takeEvery(ActionType.UNSELECT_PATIENT, onUnselectPatient);
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
        fork(watchUnselectPatient)
    ]);
}