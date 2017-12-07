import * as Actions from './actions';
import * as Api from '../common/api';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { ActionResult, PatientUser, User, UserArgs } from '../common';

function* fetchAllUsers() {
    try {
        const users = yield call(() => Api.users.fetchAllUsers());
        yield(put(Actions.fetAllUsersSuccess(users)));
    } catch (e) {
        yield(put(Actions.fetchAllUsersFailure(e)));
    }
}

function* createUser(action: ActionResult<UserArgs>) {
    try {
        if (action.value === undefined) {
            throw new Error('action is missing required user args value');
        }

        const { user, clinicId, clinicianId } = action.value;
        let updatedUser: User = yield call(Api.users.createUser, user);

        if (updatedUser.type === 'patient' && clinicId && clinicianId) {
            const dosespotUser = yield call(
                () => Api.dosespot.createPatient(clinicId, clinicianId, updatedUser as PatientUser)
            );
            updatedUser.dosespotPatientId = dosespotUser.patientId;
            updatedUser = yield call(Api.users.updateUser, updatedUser);
            yield(put(Actions.createUserSuccess(updatedUser)));
        } else {
            yield(put(Actions.createUserSuccess(updatedUser)));
        }
    } catch (e) {
        yield(put(Actions.createUserFailure(e)));
    }
}

function* updateUser(action: ActionResult<UserArgs>) {
    try {
        if (action.value === undefined) {
            throw new Error('action is missing required user args value');
        }

        const { user, clinicId, clinicianId } = action.value;
        let updatedUser = yield call(Api.users.updateUser, user);

        if (updatedUser.type === 'patient' && clinicId && clinicianId) {
            let dosespotUser;
            if (updatedUser.dosespotPatientId) {
                dosespotUser = yield call(
                    () => Api.dosespot.updatePatient(clinicId, clinicianId, updatedUser as PatientUser)
                );
            } else {
                dosespotUser = yield call(
                    () => Api.dosespot.createPatient(clinicId, clinicianId, updatedUser as PatientUser)
                );
            }
            updatedUser.dosespotPatientId = dosespotUser.patientId;
            updatedUser = yield call(Api.users.updateUser, updatedUser);
            yield(put(Actions.updateUserSuccess(updatedUser)));
        } else {
            yield(put(Actions.updateUserSuccess(updatedUser)));
        }
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
