// import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
// import * as Actions from './actions';
// import {Api} from '../services/api'

// function* fetchVisits(){

//     try{
//         const result  = yield call(() => Api.visits.fetch(4602455549815028))
//         yield(put(Actions.loadAllVisitsCompleted(result)));
//     } catch (e){
//         yield(put(Actions.loadAllFailed(e)));
//     }
// }

// function* watchLoadAll(){
//     yield takeEvery(Actions.ActionType.LOAD_ALL, fetchVisits);
// }

// export default function* root(){
//     yield all([
//         fork(watchLoadAll)
//     ]);
// }