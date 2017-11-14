import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { ActionType, fetchDoseSpotStatusSuccess, fetchDoseSpotStatusFailure } from './actions';
import * as api from '../common/api';

function* fetchDoseSpotStatus() {
    try {
        const clinicId = 1141;
        const clinicianId = 44747;
        const status = yield call(() => api.dosespot.fetchStatus(clinicId, clinicianId));
        yield(put(fetchDoseSpotStatusSuccess(status)));
    } catch (e) {
        yield(put(fetchDoseSpotStatusFailure(e)));
    }
}

function* watchFetchDoseSpotStatus() {
    yield takeEvery(ActionType.FETCH_DOSESPOT_STATUS, fetchDoseSpotStatus);
}

/**
 * Fork allows us to be able to call the sagas concurrently
 */
export default function* root() {
    yield all([
        fork(watchFetchDoseSpotStatus)
    ]);
}