import {all, fork, put, takeEvery} from 'redux-saga/effects';
import * as Actions from './actions';

function* fetchPatients(){
    try {
        yield(put(Actions.Action.loadAllPatientsSuccess([])));
    } catch(e) {
        yield(put(Actions.Action.loadAllPatientsFailure(e)))
    }
}

function* watchFetchAllPatients(){
    yield takeEvery(Actions.Action.loadAllPatients, fetchPatients)
}


/**
 * Fork allows us to be able to call the sagas concurrently
 */
export function* root(){
    yield all([
        fork(watchFetchAllPatients)
    ])
}

