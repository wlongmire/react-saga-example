import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import { Api } from '../services/api'


function* fetchSingleSignOnInfo() {
    try {
        if (localStorage.getItem('clinicId') === null) {
            localStorage.setItem('clinicId', '1141');
        }

        if (localStorage.getItem('clinicianId') === null) {
            localStorage.setItem('clinicianId', '44747');
        }

        const clinicId = Number(localStorage.getItem('clinicId'));
        const clinicianId = Number(localStorage.getItem('clinicianId'));
        
        const result = yield call(() => Api.dosespot.fetchSingleSignOnInfo(clinicId, clinicianId));
        yield(put(Actions.fetchSingleSignOnInfoSuccess(result)));
    } catch (e) {
        yield(put(Actions.fetchSingleSignOnInfoFailed(e)));
    }
}

function* watchFetchSingleSignOnInfo() {
    yield takeEvery(Actions.ActionType.FETCH_SSO_INFO, fetchSingleSignOnInfo)
}

/**
 * Fork allows us to be able to call the sagas concurrently
 */
export default function* root() {
    yield all([
        fork(watchFetchSingleSignOnInfo)
    ])
}