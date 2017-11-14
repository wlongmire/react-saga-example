import * as Actions from './actions';
import * as Api from '../common/api';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { ActionResult, User } from '../common';

function* fetchAllUsers() {
    try {
        const users = yield call(() => Api.users.fetchAllUsers());
        yield(put(Actions.fetAllUsersSuccess(users)));
    } catch (e) {
        yield(put(Actions.fetchAllUsersFailure(e)));
    }
}

function* createUser(action: ActionResult<User>) {
    try {
        if (action.value === undefined) {
            throw new Error('action is missing required user value');
        }
        const updatedUser = yield call(Api.users.createUser, action.value);
        yield(put(Actions.createUserSuccess(updatedUser)));
    } catch (e) {
        yield(put(Actions.createUserFailure(e)));
    }
}

function* updateUser(action: ActionResult<User>) {
    try {
        if (action.value === undefined) {
            throw new Error('action is missing required user value');
        }
        const updatedUser = yield call(Api.users.updateUser, action.value);
        yield(put(Actions.updateUserSuccess(updatedUser)));
    } catch (e) {
        yield(put(Actions.updateUserFailure(e)));
    }
}

function* watchFetchAllUsers() {
    yield takeEvery(Actions.ActionType.FETCH_ALL_USERS, fetchAllUsers);
}

function* watchCreateUser() {
    yield takeEvery(Actions.ActionType.CREATE_USER, createUser);
}

function* watchUpdateUser() {
    yield takeEvery(Actions.ActionType.UPDATE_USER, updateUser);
}

export default function* root() {
    yield all([
        fork(watchFetchAllUsers),
        fork(watchCreateUser),
        fork(watchUpdateUser),
    ]);
}
