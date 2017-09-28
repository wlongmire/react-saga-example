import * as Common from '../common';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import * as Navigation from '../navigation';
import { AuthService, AuthLoginCredentials } from '../services/auth';

/**
 * Performs the login operation.
 * @param action ActionResult with LoginCredentials as value.
 */
export function* login(action: Common.ActionResult<AuthLoginCredentials>) {
    try {
        if (!action.value) {
            throw new Error('action is missing required LoginCredentials value');
        }
        const { clientToken, userRole, userChannel } = yield call(AuthService.login, action.value);
        yield(put(Actions.loginSuccess({ clientToken, userRole, userChannel })));
    } catch (e) {
        yield(put(Actions.loginFail(e)));
    }
}

/**
 * Performs the logout operation.
 * @param action ActionResult with no value.
 */
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

export function* onForgotPassword(action: Common.ActionResult<string>) {
    try {
        yield call(AuthService.forgotPassword, action.value);
        yield(put(Actions.forgotPasswordSuccess()));
    } catch (e) {
        yield(put(Actions.forgotPasswordFail(e)));
    }
}

function* onLoginSuccess() {
    yield(put(Navigation.navigate('/')));
}

function* onLogoutSuccess() {
    yield(put(Navigation.navigate('/')));
}

/**
 * Listens for LOGIN messages and executes
 * the login function when message is received.
 */
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

/**
 * Listens for LOGOUT messages and executes
 * the logout function when message is received.
 */
function* watchForLogout() {
    yield takeEvery(Actions.ActionType.LOGOUT, logout);
}

/**
 * The root saga.
 */
export default function* root() {
    yield all([
        fork(watchForLogin),
        fork(watchForLogout),
        fork(watchForLoginSuccess),
        fork(watchForLogoutSuccess),
        fork(watchForForgotPassword)
    ]);
}