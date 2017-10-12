import {ActionType} from './actions';
import {getAllVisits} from './selectors';
import {root} from './sagas';
import {VisitItem} from './model';
import {reducer} from './reducer';
import { VisitsContainer, VisitDrawer, getSingleVisit, VisitContainer} from './components';

export const Components = {
    VisitsContainer,
    VisitDrawer,
    VisitContainer
};

export const utils = {
    getSingleVisit
};

export const Actions = {
    ActionType
};

export const Selectors = {
    getAllVisits
};

export const Sagas = {
    root
};

export const Models = {
    VisitItem
};

export const Reducers = {
    root: reducer
};