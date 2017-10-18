import { ActionResult } from '../common';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import * as Navigation from '../navigation';
import { AuthCredentials, AuthInfo, Identity } from './reducer';
import * as AuthService from './service';

export function* login(action: ActionResult<AuthCredentials>) {
    try {
        if (!action.value) {
            throw new Error('action is missing required LoginCredentials value');
        }
        const auth = yield call(AuthService.login, action.value.email, action.value.password);
        yield(put(Actions.loginSuccess(auth)));
    } catch (e) {
        yield(put(Actions.loginFail(e)));
    }
}

export function* logout(action: ActionResult<{}>) {
    try {
        localStorage.removeItem('auth');
        localStorage.removeItem('identity');
        yield(put(Actions.logoutSuccess()));
    } catch (e) {
        yield(put(Actions.logoutFail(e)));
    }
}

export function* verifyCode(action: ActionResult<string>) {
    try {
        yield call(AuthService.verifyCode, action.value);
        yield(put(Actions.verifyCodeSuccess()));
    } catch (e) {
        yield(put(Actions.verifyCodeFail(e)));
    }
}

export function* onForgotPassword(action: ActionResult<string>) {
    try {
        yield call(AuthService.forgotPassword, action.value);
        yield(put(Actions.forgotPasswordSuccess()));
    } catch (e) {
        yield(put(Actions.forgotPasswordFail(e)));
    }
}

function* onLoginSuccess(action: ActionResult<AuthInfo>) {
    const authInfo = action.value as AuthInfo;
    localStorage.setItem('auth', JSON.stringify(authInfo));
    yield(put(Navigation.navigate('/verify-code')));
}

function* onLogoutSuccess() {
    yield(put(Navigation.navigate('/')));
}

function* onFetchIdentity() {
    try {
        const identity = yield call(AuthService.fetchIdentity);
        yield(put(Actions.fetchIdentitySuccess(identity)));
    } catch (e) {
        yield(put(Actions.fetchIdentityFail(e)));
    }
}

function* onFetchIdentitySuccess(action: ActionResult<Identity>) {
    const identity = action.value as Identity;
    localStorage.setItem('identity', JSON.stringify(identity));
    yield(null);
}

function* onVerifyCodeSuccess() {
    yield(put(Navigation.navigate('/')));
    yield(put(Actions.fetchIdentity()));
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

function* watchForFetchIdentity() {
    yield takeEvery(Actions.ActionType.FETCH_IDENTITY, onFetchIdentity);
}

function* watchForFetchIdentitySuccess() {
    yield takeEvery(Actions.ActionType.FETCH_IDENTITY_SUCCESS, onFetchIdentitySuccess);
}

export default function* root() {
    yield all([
        fork(watchForLogin),
        fork(watchForLogout),
        fork(watchForLoginSuccess),
        fork(watchForLogoutSuccess),
        fork(watchForForgotPassword),
        fork(watchForVerifyCode),
        fork(watchForVerifyCodeSuccess),
        fork(watchForFetchIdentity),
        fork(watchForFetchIdentitySuccess)
    ]);
}