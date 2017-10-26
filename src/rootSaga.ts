import { fork, all } from 'redux-saga/effects';
// import * as auth from './auth';
// import * as treatments from './treatments';
// import * as navigation from './navigation';
// import * as users from './users';
// import * as visits from './visits';
import { authSaga } from './auth';
import { navSaga } from './navigation';
import { patientsSaga } from './patients';
import { doseSpotSaga } from './dosespot';
import { adminSaga } from './admin';
import { userSaga } from './users';
import { chatSaga } from './chat';
// import { visitSaga } from './visits';

export default function* root() {
    yield all([
        fork(authSaga),
        fork(navSaga),
        fork(userSaga),
        fork(patientsSaga),
        fork(doseSpotSaga),
        fork(adminSaga),
        fork(chatSaga)
    ]);
}