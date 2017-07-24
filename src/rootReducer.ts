import { combineReducers } from 'redux';
import * as Cases from './cases';
import * as Patients from './users';

const casesReducer = Cases.Reducers.root;
const patientsReducer = Patients.Reducers.root;
// todo: ... other reducers

export default combineReducers({
    cases : casesReducer,
    patients: patientsReducer
});