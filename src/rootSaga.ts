// import { all } from 'redux-saga/effects';
// import { cases } from './cases';
// import { fork, all } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
// import usersSaga from './users';
// import eventsSaga from './events';

export default function* root() {
    yield all([
        // fork(cases.sagas.root)
        // fork(usersSaga),
        // fork(eventsSaga)
    ]);
}