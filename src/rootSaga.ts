import { fork, all } from 'redux-saga/effects';
import * as auth from './auth';
import * as navigation from './navigation';

export default function* root() {
    yield all([
        fork(auth.Sagas.root),
        fork(navigation.Sagas.root)
    ]);
}