import { combineReducers } from 'redux';
import * as Cases from './cases';
// import * as Patients from './users';
import * as Visits from './visits';
import * as Auth from './auth';
import * as TestOrders from './testorders';
import * as Others from './others';
import * as Wellness from './wellness';
import * as Rx from './treatments';

import { patientsReducer, PatientsState } from './patients';
import { doseSpotReducer, DoseSpotState } from './dosespot';

// NOTE: ADD MODULE REDUCERS HERE
const casesReducer = Cases.Reducers.root;
// const patientsReducer = Patients.Reducers.root;
const visitsReducer = Visits.Reducers.root;
const testOrdersReducer = TestOrders.Reducers.root;
const othersReducer = Others.Reducers.root;
const wellnessReducer = Wellness.Reducers.root;
const rxReducer = Rx.Reducers.root;
// todo: ... other reducers
const authReducer = Auth.Reducers.root;

// NOTE: REGISTER MODULE REDUCERS HERE
export default combineReducers({
    cases : casesReducer,
    visits: visitsReducer,
    auth: authReducer,
    testorders: testOrdersReducer,
    wellness: wellnessReducer,
    others:othersReducer,
    treatments: rxReducer,
    patients: patientsReducer,
    dosespot: doseSpotReducer
});

export interface GlobalState {
    patients: PatientsState;
    dosespot: DoseSpotState
}