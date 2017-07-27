import { all, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';

function* fetchVisits(){
    try{
        yield(put(Actions.Action.loadAllVisitsCompleted([])));
    } catch (e){
        yield(put(Actions.Action.loadAllFailed(e)))
    }
}

function* watchLoadAll(){
    yield takeEvery(Actions.Action.loadAllVisits, fetchVisits)
}

export function* root(){
    yield all([
        fork(watchLoadAll)
    ])
}