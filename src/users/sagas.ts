import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import { Api } from '../services/api'

function* fetchPatients(){
    try {
        const patients = yield call(()=> Api.users.fetchAllPatients())
        yield(put(Actions.loadAllPatientsSuccess(patients)));
    } catch(e) {
        yield(put(Actions.loadAllPatientsFailure(e)))
    }
}

function* watchFetchAllPatients(){
    yield takeEvery(Actions.ActionType.LOAD_ALL_PATIENTS, fetchPatients)
}


/**
 * Fork allows us to be able to call the sagas concurrently
 */
export function* root(){
    yield all([
        fork(watchFetchAllPatients)
    ])
}

