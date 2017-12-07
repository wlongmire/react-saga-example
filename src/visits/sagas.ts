import * as Actions from './actions';
import * as Api from '../common/api';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { ActionResult } from '../common';

function* fetchVisits(action: ActionResult<number>) {
    try {
        const channelId = Number(action.value);
        const visits = yield call(() => Api.visits.getVisitsForChannel(channelId));
        yield(put(Actions.fetchVisitsSuccess(visits)));
    } catch (e) {
        yield(put(Actions.fetchVisitsFail(e)));
    }
}

function* watchGetVisits() {
    yield takeEvery(Actions.ActionType.FETCH_VISITS, fetchVisits);
}

export default function* root() {
    yield all([
        fork(watchGetVisits)
    ]);
}