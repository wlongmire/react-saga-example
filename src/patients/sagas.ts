import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { ActionType, fetchAllPatientsSuccess, fetchAllPatientsFailure } from './actions';
import { Api } from '../services/api'

function* fetchPatients(){
    try {
        const patients = yield call(()=> Api.patients.fetchAll());
        yield(put(fetchAllPatientsSuccess(patients)));
    } catch(e) {
        yield(put(fetchAllPatientsFailure(e)));
    }
}

function* watchFetchAllPatients(){
    yield takeEvery(ActionType.FETCH_ALL_PATIENTS, fetchPatients)
}

export default function* root(){
    yield all([
        fork(watchFetchAllPatients)
    ])
}

