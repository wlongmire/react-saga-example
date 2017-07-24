import * as Common from '../common';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import { LoginResponse } from './model';
import { LoginCredentials } from './model';
import { Auth } from '../services/auth';

export function* login(action: Common.ActionResult<LoginCredentials>) {
    try {
        if (!action.value) {
            throw new Error('action is missing required LoginCredentials value');
        }

        const { email, password } = action.value;
        const result = yield call(Auth.login, email, password);

        if (result.error) {
            yield(put(Actions.loginFail(new Error(result.error))));
        } else {
            yield(put(Actions.loginSuccess(new LoginResponse(result.new_client_token))));
        }
    } catch(e) {
        yield(put(Actions.loginFail(e)));
    }
}

export function* logout(action: Common.ActionResult<{}>) {
    try {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        yield(put(Actions.logoutSuccess()));
    } catch(e) {
        yield(put(Actions.logoutFail(e)));
    }
}

function* watchLogin() {
    yield takeEvery(Actions.login, login);
}

function* watchLogout() {
    yield takeEvery(Actions.logout, logout);
}

export function* root() {
    yield all([
        fork(watchLogin),
        fork(watchLogout)
    ]);
}