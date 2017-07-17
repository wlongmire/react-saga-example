import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import { api } from '../services/api';

function* fetchCases() {
    try {
        const cases = yield call(api.cases.getAll);
        yield(put(Actions.Action.loadAllCompleted(cases)));
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