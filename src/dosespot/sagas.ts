
import * as Actions from './actions';
import * as Api from '../common/api';
import auth from '../auth';
import { all, call, fork, put, race, take, takeEvery } from 'redux-saga/effects';
import { ActionResult, DosespotClinicianArgs, Identity } from '../common';

let intervalId: any;
const TEN_SECONDS = 10000;

function* stopMonitor() {
    try {
        if (intervalId === undefined) {
            return;
        }
        clearInterval(intervalId);
        yield(put(Actions.stopMonitorSuccess()));
    } catch (e) {
        yield(put(Actions.stopMonitorFail(e)));
    }
}

function* fetchClinicianStatus(args: ActionResult<DosespotClinicianArgs>) {
    try {
        const { clinicId, clinicianId } = args.value as DosespotClinicianArgs;
        if (clinicId === undefined) {
            return null;
        }

        if (clinicianId === undefined) {
            return null;
        }

        const  result = yield call(() => Api.dosespot.fetchClinicianStatus(clinicId, clinicianId));
        yield(put(Actions.fetchClinicianStatusSuccess(result)));
    } catch (e) {
        yield(put(Actions.fetchClinicianStatusFail(e)));
    }
}

const wait = (ms: number) => (
    new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
);

function* startMonitor(args: ActionResult<Identity>) {
    const identity = args.value as Identity;
    
    if (identity.roleId !== 1) { // only poll for doctors
        return;
    }

    if (identity.userInfo) {
        const clinicId = Number(identity.userInfo.clinicId);
        const clinicianId = Number(identity.userInfo.clinicianId);

        if (clinicId === undefined) {
            console.warn(`clinicId is not set for the current doctor user. Dosespot status is disabled.`);
            return;
        }

        if (clinicianId === undefined) {
            console.warn(`clinicianId is not set for the current doctor user. Dosespot status is disabled.`);
            return;
        }

        while (true) {
            const { logout } = yield race({
                logout: take(auth.actions.ActionType.LOGOUT),
                tick: call(wait, TEN_SECONDS)
            });
    
            if (!logout) {
                yield put(Actions.fetchClinicianStatus(
                    { clinicId, clinicianId } as DosespotClinicianArgs)
                );
            } else {
                break;
            }
        }
    }
}

function* watchStopMonitor() {
    yield takeEvery(Actions.ActionType.STOP_MONITOR, stopMonitor);
}

function* watchFetchIdentitySuccess() {
    yield takeEvery(auth.actions.ActionType.FETCH_IDENTITY_SUCCESS, startMonitor);
}

function* watchFetchClinicianStatus() {
    yield takeEvery(Actions.ActionType.FETCH_CLINICIAN_STATUS, fetchClinicianStatus);
}

export default function* root() {
    yield all([
        fork(watchFetchClinicianStatus),
        fork(watchFetchIdentitySuccess),
        fork(watchStopMonitor)
    ]);
}