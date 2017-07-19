import {ActionType, Action} from './actions';
// import {Patient, Patients} Update this part once we get to make the necessary exports in the respective folders.
import {Patients} from './components';
import {ReducerState} from './models';
import {getAllPatients} from './selectors';
import {root} from './sagas';
import {reducer} from './reducer';

/**
 * As per the layout spec in the Cases section, this is a public API that we can exploit through which our modules can
 * interface with each other.
 * 
 * It exposes all the elements,modules, components within this particular users module that we will continue 
 * updating to be able to achieve the necessary functionality
 */


export const Model = {
    ReducerState
}

export const Actions = {
    ActionType,
    Action
}

export const Components = {
    Patients,
    // Patients,Doctors and all other users will be here
}

export const Selectors = {
    getAllPatients
}

export const Sagas = {
    root
}

export const Reducers = {
    root: reducer
}