import { all, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';

function* fetchVisits(){
    try{
        console.log('fetchVisits...saga generator');
        yield(put(Actions.loadAllVisitsCompleted([])));
    } catch (e){
        yield(put(Actions.loadAllFailed(e)));
    }
}

function* watchLoadAll(){
    yield takeEvery(Actions.ActionType.LOAD_ALL, fetchVisits);
}

export function* root(){
    yield all([
        fork(watchLoadAll)
    ]);
}