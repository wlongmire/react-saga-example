import { combineReducers } from 'redux';
// import * as Cases from './cases';
// import * as Patients from './users';
import * as Visits from './visits';
// import * as Auth from './auth';
// import * as TestOrders from './testorders';
// import * as Others from './others';
// import * as Wellness from './wellness';
// import * as Rx from './treatments';

import { patientsReducer, PatientsState } from './patients';
import { doseSpotReducer, DoseSpotState } from './dosespot';
import { authReducer, AuthState } from './auth';
import { adminReducer, DoseSpotState as AdminDoseSpotState } from './admin';
import { chatReducer, ChatState } from './chat';
import { userReducer, UserState } from './users';

// NOTE: ADD MODULE REDUCERS HERE
// const casesReducer = Cases.Reducers.root;
// const patientsReducer = Patients.Reducers.root;
const visitsReducer = Visits.Reducers.root;
// const testOrdersReducer = TestOrders.Reducers.root;
// const othersReducer = Others.Reducers.root;
// const wellnessReducer = Wellness.Reducers.root;
// const rxReducer = Rx.Reducers.root;
// todo: ... other reducers
// const authReducer = Auth.root;

// NOTE: REGISTER MODULE REDUCERS HERE
export default combineReducers({
    // cases: casesReducer,
    chat: chatReducer,
    visits: visitsReducer,
    auth: authReducer,
    // testorders: testOrdersReducer,
    // wellness: wellnessReducer,
    // others: othersReducer,
    // treatments: rxReducer,
    patients: patientsReducer,
    dosespot: doseSpotReducer,
    admin: adminReducer,
    users: userReducer
});

export interface GlobalState {
    patients: PatientsState;
    dosespot: DoseSpotState;
    auth: AuthState;
    admin: AdminDoseSpotState;
    users: UserState;
    chat: ChatState;
}