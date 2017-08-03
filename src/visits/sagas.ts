import { all, fork, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
// import * as Common from '../common';
import {Api} from '../services/api'

function* fetchVisits(){
    try{
        let allVisits = Api.visits.fetch(4602455549815028);
        console.log('All Visits', allVisits);
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