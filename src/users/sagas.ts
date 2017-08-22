import {all, fork, put, takeEvery} from 'redux-saga/effects';
import * as Actions from './actions';

function* fetchPatients(){
    try {
        yield(put(Actions.loadAllPatientsSuccess([])));
    } catch(e) {
        yield(put(Actions.loadAllPatientsFailure(e)))
    }
}

function* watchFetchAllPatients(){
    yield takeEvery(Actions.loadAllPatients, fetchPatients)
}


/**
 * Fork allows us to be able to call the sagas concurrently
 */
export function* root(){
    yield all([
        fork(watchFetchAllPatients)
    ])
}

