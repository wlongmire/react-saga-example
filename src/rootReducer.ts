import { combineReducers } from 'redux';
import * as Cases from './cases';
import * as Patients from './users';
import * as Auth from './auth';

// NOTE: ADD MODULE REDUCERS HERE
const casesReducer = Cases.Reducers.root;
const patientsReducer = Patients.Reducers.root;
const authReducer = Auth.Reducers.root;

// NOTE: REGISTER MODULE REDUCERS HERE
export default combineReducers({
    auth: authReducer,
    cases: casesReducer,
    patients: patientsReducer
});