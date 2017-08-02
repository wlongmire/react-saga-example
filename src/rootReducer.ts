import { combineReducers } from 'redux';
import * as Cases from './cases';
import * as Patients from './users';
import * as Visits from './visits';

const casesReducer = Cases.Reducers.root;
const patientsReducer = Patients.Reducers.root;
const visitsReducer = Visits.Reducers.root;
// todo: ... other reducers

export default combineReducers({
    cases : casesReducer,
    patients: patientsReducer,
    visits: visitsReducer
});