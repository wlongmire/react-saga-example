import { all, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';

function* fetchCases() {
    try {
        yield(put(Actions.Action.loadAllCompleted([])));
    } catch (e) {
        yield(put(Actions.Action.loadAllFailed(e)));
    }
}

function* watchLoadAll() {
    yield takeEvery(Actions.Action.loadAll, fetchCases);
}

export function* root() {
    yield all([
        fork(watchLoadAll)
        // todo: additional sagas
    ]);
}