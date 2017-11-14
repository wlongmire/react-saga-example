import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import * as Api from '../common/api';

function* fetchSingleSignOnInfo() {
    try {
        // TODO remove hardcode values
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
    yield takeEvery(Actions.ActionType.FETCH_SSO_INFO, fetchSingleSignOnInfo);
}

export default function* root() {
    yield all([
        fork(watchFetchSingleSignOnInfo)
    ]);
}