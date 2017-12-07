import { all, fork, take } from 'redux-saga/effects';
import { ActionType } from './actions';
import { history } from '../common';

/**
 * Watches for navigation events and triggers router navigation via history.
 */
function* watchNavigate() {
    while (true) {
        const { value } = yield take(ActionType.NAVIGATE);
        
        if (value === undefined) {
            history.push(history.location.state.referrer);
        } else {
            history.push(value);
        }
    }
}

export default function* root() {
    yield all([
        fork(watchNavigate)
    ]);
}
