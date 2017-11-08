import { combineReducers } from 'redux';
import { adminReducer } from './admin';
import { authReducer } from './auth';
import { chatReducer } from './chat';
import { doseSpotReducer } from './dosespot';
import { patientsReducer } from './patients';
import { userReducer } from './users';
import { treatmentsReducer } from './treatments';
import { visitsReducer } from './visits';
import { otherReducer } from './other';

export default combineReducers({
    admin: adminReducer,
    auth: authReducer,
    chat: chatReducer,
    dosespot: doseSpotReducer,
    patients: patientsReducer,
    treatments: treatmentsReducer,
    users: userReducer,
    visits: visitsReducer,
    other: otherReducer
});