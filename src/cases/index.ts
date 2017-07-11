import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { ActionResult } from '../common';
import { Cases, Case } from './components';

/**
 * The module index is responsible for maintaining its public API. This is the exposed surface
 * where modules can interface with each other.
 * 
 * The module exposes the models, Components, ActionTypes, Action Generators, selectors, sagas, and the reducer.
 */
export module cases {

    /**
     * Reducer state model.
     */
    export interface ReducerState {}

    /**
     * Represents a case.
     */
    export interface CaseItem {

    }

    /**
     * Public Components
     */
    export const Components = {
        Cases,
        Case
    };

    /**
     * The action types (constants) that describe the actions for our module.
     */
    export module ActionType {
        export const ADD = 'cases/ADD';
        export const LOAD_ALL = 'cases/LOAD_ALL';
        export const LOAD_ALL_COMPLETED = 'cases/LOAD_ALL_COMPLETED';
        export const LOAD_ALL_FAILED = 'cases/LOAD_ALL_FAILED';
    }

    /**
     * Action generators.
     */
    export class Action {

        /**
         * Sample action generator
         * @param c 
         */
        public static add(c: CaseItem): ActionResult<CaseItem> {
            const action: ActionResult<CaseItem> = {
                type: ActionType.ADD,
                value: c
            };
            return action;
        }

        public static loadAll(): ActionResult<{}> {
            const action: ActionResult<{}> = {
                type: ActionType.LOAD_ALL
            };
            return action;
        }

        public static loadAllCompleted(items: Array<CaseItem>): ActionResult<Array<CaseItem>> {
            const action: ActionResult<Array<CaseItem>> = {
                type: ActionType.LOAD_ALL_COMPLETED,
                value: items
            };
            return action;
        }

        public static loadAllFailed(error: Error): ActionResult<Error> {
            const action: ActionResult<Error> = {
                type: ActionType.LOAD_ALL_FAILED,
                value: error
            };
            return action;
        }
    }

    /**
     * Selectors provide a way to query data from the module state.
     */
    export module selectors {

        /**
         * Sample selector
         * @param state 
         */
        export const getAll = (state: ReducerState) => state;
    }

    /**
     * Cases sagas (effects)
     */
    export module sagas {
        function* fetchCases() {
            try {
                yield(put(Action.loadAllCompleted([])));
            } catch (e) {
                yield(put(Action.loadAllFailed(e)));
            }
        }

        function* watchLoadAll() {
            yield takeEvery(Action.loadAll, fetchCases);
        }

        export function* root() {
            yield all([
                fork(watchLoadAll)
                // todo: additional sagas
            ]);
        }
    }

    // initial reducer state
    const initialState: ReducerState = {};

    /**
     * Redux reducer
     * @param state 
     * @param action 
     */
    export function reducer(state: ReducerState = initialState, action: ActionResult<{}>) {
        switch (action.type) {
            default:
                return state;
        }
    }
}