import { fork, all } from 'redux-saga/effects';
import * as auth from './auth';
// import * as treatments from './treatments';
import * as navigation from './navigation';
import * as users from './users';
import * as visits from './visits';
import { patientsSaga } from './patients';
import { doseSpotSaga } from './dosespot';

export default function* root() {
    yield all([
        fork(auth.Sagas.root),
        fork(navigation.Sagas.root),
        fork(visits.Sagas.root),
        fork(users.Sagas.root),
        fork(patientsSaga),
        fork(doseSpotSaga)
        // fork(treatments.Sagas.root)
    ]);
}