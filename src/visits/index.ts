import {ActionType, Action} from './actions';
import {getAllVisits} from './selectors';
import {root} from './sagas';
import {VisitItem} from './model';
import {reducer} from './reducer';
import { VisitDrawer } from './components';


export const Components = {
    VisitDrawer
}

export const Actions = {
    ActionType,
    Action
}

export const Selectors = {
    getAllVisits
}

export const Sagas = {
    root
}

export const Models = {
    VisitItem
}
export const Reducers = {
    root: reducer
}