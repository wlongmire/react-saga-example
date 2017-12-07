// import { all, fork, put, takeEvery } from 'redux-saga/effects';
// import * as Actions from './actions';

// function* fetchCases() {
//     try {
//         const cases: Array<any> = [];
//         yield(put(Actions.Action.loadAllCompleted(cases)));
//     } catch (e) {
//         yield(put(Actions.Action.loadAllFailed(e)));
//     }
// }

// function* watchLoadAll() {
//     yield takeEvery(Actions.Action.loadAll, fetchCases);
// }

// export function* root() {
//     yield all([
//         fork(watchLoadAll)
//         // todo: additional sagas
//     ]);
// }