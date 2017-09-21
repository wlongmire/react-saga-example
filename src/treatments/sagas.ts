import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import * as Actions from './actions';
import { Api } from '../services/api'

function* fetchSingleSignOnInfo() {
    console.log('fetching...');
    try {
        const result = yield call(() => Api.dosespot.fetchSingleSignOnInfo());
        console.log('result: ', result);
        yield(put(Actions.fetchSingleSignOnInfoSuccess(result)));
    } catch (e) {
        yield(put(Actions.fetchSingleSignOnInfoFailed(e)));
    }
}

function* watchFetchSingleSignOnInfo() {
    yield takeEvery(Actions.ActionType.FETCH_SSO_INFO, fetchSingleSignOnInfo)
}

/**
 * Fork allows us to be able to call the sagas concurrently
 */
export function* root() {
    yield all([
        fork(watchFetchSingleSignOnInfo)
    ])
}

