// import { all } from 'redux-saga/effects';
// import { cases } from './cases';
// import { fork, all } from 'redux-saga/effects';
// import { all, fork } from 'redux-saga/effects';
import * as visits from './visits';
// import usersSaga from './users';
// import eventsSaga from './events';

export default function* root() {
    return visits.Sagas.root
        // fork(cases.sagas.root)
        // fork(usersSaga),
        // fork(eventsSaga
}