import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { User } from './reducer';
import * as Actions from './actions';
import { Api } from '../services/api'

function* fetchAllUsers() {
    try {
        const users = yield call(() => Api.users.fetchAllUsers());
        yield(put(Actions.fetAllUsersSuccess(users)));
    } catch(e) {
        yield(put(Actions.fetchAllUsersFailure(e)));
    }
}

function* createUser(user: User) {
    try {
        const updatedUser = yield call(() => Api.users.createUser(user));
        yield(put(Actions.createUserSuccess(updatedUser)));
    } catch(e) {
        yield(put(Actions.createUserFailure(e)));
    }
}

function* updateUser(user: User) {
    try {
        const updatedUser = yield call(() => Api.users.updateUser(user));
        yield(put(Actions.updateUserSuccess(updatedUser)));
    } catch(e) {
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

export default function* root(){
    yield all([
        fork(watchFetchAllUsers),
        fork(watchCreateUser),
        fork(watchUpdateUser),
    ])
}

