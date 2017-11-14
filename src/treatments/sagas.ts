import * as Actions from './actions';
import * as Api from '../common/api';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { ActionResult, SingleSignOnCredentials } from '../common';

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

function* fetchTreatments(action: ActionResult<number>) {
    try { 
        if (!action.value) {
            throw new Error('action is missing required channel id');
        }
        const channelId = Number(action.value);
        const result = yield call(() => Api.treatments.getTreatmentsForChannel(channelId));
        yield(put(Actions.fetchTreatmentsSuccess(result)));
    } catch (e) {
        yield(put(Actions.fetchTreatmentsFail(e)));
    }
}

function* watchFetchSingleSignOnInfo() {
    yield takeEvery(Actions.ActionType.FETCH_SSO_INFO, fetchSingleSignOnInfo);
}

function* watchFetchTreatments() {
    yield takeEvery(Actions.ActionType.FETCH_TREATMENTS, fetchTreatments);
}

export default function* root() {
    yield all([
        fork(watchFetchSingleSignOnInfo),
        fork(watchFetchTreatments)
    ]);
}