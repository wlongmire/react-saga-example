import * as Common from '../common';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import { AuthService, LoginCredentials } from '../services/auth';

export function* login(action: Common.ActionResult<LoginCredentials>) {
    try {
        if (!action.value) {
            throw new Error('action is missing required LoginCredentials value');
        }
        yield call(AuthService.login, action.value);
        yield(put(Actions.loginSuccess()));
    } catch (e) {
        yield(put(Actions.loginFail(e)));
    }
}

export function* logout(action: Common.ActionResult<{}>) {
    try {
        const result = yield call(AuthService.logout);

        if (result.error) {
            yield(put(Actions.logoutFail(result.error)));
        } else {
            yield(put(Actions.logoutSuccess()));
        }
    } catch (e) {
        yield(put(Actions.logoutFail(e)));
    }
}

function* watchLogin() {
    yield takeEvery(Actions.ActionType.LOGIN, login);
}

function* watchLogout() {
    yield takeEvery(Actions.ActionType.LOGOUT, logout);
}

export function* root() {
    yield all([
        fork(watchLogin),
        fork(watchLogout)
    ]);
}