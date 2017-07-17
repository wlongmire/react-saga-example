import * as Common from '../common';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import { api } from '../services/api';

function* login(action: Common.ActionResult<{}>) {
    try {
        const result = yield call(api.users.get, 1);
        yield(put(Actions.Action.loginSuccess(result)));
    } catch (e) {
        yield(put(Actions.Action.loginFail(e)));
    }
}

function* watchLoginSubmitted() {
    yield takeEvery(Actions.Action.loginSubmitted, login);
}

export function* root() {
    yield all([
        fork(watchLoginSubmitted)
        
    ]);
}