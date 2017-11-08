import * as Actions from './actions';
import * as Api from '../common/api';
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import { ActionResult } from '../common';

function* loadOther(action: ActionResult<number>) {
    try { 
        if (!action.value) {
            throw new Error('action is missing required channel id');
        }
        const channelId = Number(action.value);
        const result = yield call(() => Api.other.getOtherForChannel(channelId));
        yield(put(Actions.loadOtherSuccess(result)));
    } catch (e) {
        yield(put(Actions.loadOtherSuccess(e)));
    }
}

function* watchLoadOther() {
    yield takeEvery(Actions.ActionType.LOAD_OTHER, loadOther);
}

export default function* root() {
    yield all([
        fork(watchLoadOther)
    ])
}