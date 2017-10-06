import * as Common from '../common';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import * as Navigation from '../navigation';
import { AuthCredentials } from './reducer';
import * as AuthService from './service';

export function* login(action: Common.ActionResult<AuthCredentials>) {
    try {
        if (!action.value) {
            throw new Error('action is missing required LoginCredentials value');
        }
        const authInfo = yield call(AuthService.login, action.value.email, action.value.password);
        yield(put(Actions.loginSuccess(authInfo)));
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

export function* verifyCode(action: Common.ActionResult<string>) {
    try {
        yield call(AuthService.verifyCode, action.value);
        yield(put(Actions.verifyCodeSuccess()));
    } catch (e) {
        yield(put(Actions.verifyCodeFail(e)));
    }
}

export function* onForgotPassword(action: Common.ActionResult<string>) {
    try {
        yield call(AuthService.forgotPassword, action.value);
        yield(put(Actions.forgotPasswordSuccess()));
    } catch (e) {
        yield(put(Actions.forgotPasswordFail(e)));
    }
}

function* onLoginSuccess() {
    yield(put(Navigation.navigate('/verify-code')));
}

function* onLogoutSuccess() {
    yield(put(Navigation.navigate('/')));
}

function* onVerifyCodeSuccess() {
    yield(put(Navigation.navigate('/')));
}

function* watchForLogin() {
    yield takeEvery(Actions.ActionType.LOGIN, login);
}

function* watchForLoginSuccess() {
    yield takeEvery(Actions.ActionType.LOGIN_SUCCESS, onLoginSuccess);
}

function* watchForLogoutSuccess() {
    yield takeEvery(Actions.ActionType.LOGOUT_SUCCESS, onLogoutSuccess);
}

function* watchForForgotPassword() {
    yield takeEvery(Actions.ActionType.FORGOT_PASSWORD, onForgotPassword);
}

function* watchForVerifyCode() {
    yield takeEvery(Actions.ActionType.VERIFY_CODE, verifyCode);
}

function* watchForVerifyCodeSuccess() {
    yield takeEvery(Actions.ActionType.VERIFY_CODE_SUCCESS, onVerifyCodeSuccess);
}

function* watchForLogout() {
    yield takeEvery(Actions.ActionType.LOGOUT, logout);
}

export default function* root() {
    yield all([
        fork(watchForLogin),
        fork(watchForLogout),
        fork(watchForLoginSuccess),
        fork(watchForLogoutSuccess),
        fork(watchForForgotPassword),
        fork(watchForVerifyCode),
        fork(watchForVerifyCodeSuccess)
    ]);
}