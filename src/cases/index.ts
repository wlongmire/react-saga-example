import { ActionType, Action } from './actions';
import { Cases, Case, CaseEvents, CaseEventsComponentProps } from './components';
import { ReducerState, CaseItem } from './model';
import { getAllCases } from './selectors';
import { root } from './sagas';
import { reducer } from './reducer';

/**
 * The module index is responsible for maintaining its public API. This is the exposed surface
 * where modules can interface with each other.
 * 
 * The module exposes the Models, Components, ActionTypes, Action Generators, Selectors, Sagas, and the Reducer.
 */
export const Model = {
    ReducerState,
    CaseItem
};

export const Actions = {
    ActionType,
    Action
};

export const Components = {
    Cases,
    Case,
    CaseEvents,
    CaseEventsComponentProps
};

export const Selectors = {
    getAllCases
};

export const Sagas = {
    root
};

export const Reducers = {
    root: reducer
};