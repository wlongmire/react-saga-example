import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import * as Actions from './actions';
import { ActionResult } from '../common';
import { Api } from '../services/api'
import { SingleSignOnCredentials } from '../dosespot';

function* fetchSingleSignOnInfo(action: ActionResult<SingleSignOnCredentials>) {
    try {
        if (!action.value) {
            throw new Error('action is missing required SingleSignOnCredentials value');
        }
        const { clinicId, clinicianId } = action.value;
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
export function* root() {
    yield all([
        fork(watchFetchSingleSignOnInfo)
    ])
}

