import { fork, all } from 'redux-saga/effects';

import authSaga from './auth/sagas';
import navSaga from './navigation/sagas';
import patientsSaga from './patients/sagas';
import doseSpotSaga from './dosespot/sagas';
import adminSaga from './admin/sagas';
import userSaga from './users/sagas';
import chatSaga from './chat/sagas';
import visitsSaga from './visits/sagas';
import treatmentsSaga from './treatments/sagas';
import otherSaga from './other/sagas';

export default function* root() {
    yield all([
        fork(authSaga),
        fork(navSaga),
        fork(userSaga),
        fork(patientsSaga),
        fork(doseSpotSaga),
        fork(adminSaga),
        fork(chatSaga),
        fork(visitsSaga),
        fork(treatmentsSaga),
        fork(otherSaga)
    ]);
}