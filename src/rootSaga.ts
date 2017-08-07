import { fork, all } from 'redux-saga/effects';
import * as auth from './auth';
import * as navigation from './navigation';
import * as visits from './visits';

export default function* root() {
    yield all([
        fork(auth.Sagas.root),
        fork(navigation.Sagas.root),
        fork(visits.Sagas.root)
    ]);
}