import { fork, all } from 'redux-saga/effects';
import * as auth from './auth';

export default function* root() {
    yield all([
        fork(auth.Sagas.root)
    ]);
}