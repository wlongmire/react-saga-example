import { combineReducers } from 'redux';
import { adminReducer } from './admin';
import { authReducer } from './auth';
import { chatReducer } from './chat';
import { doseSpotReducer } from './dosespot';
import { patientsReducer } from './patients';
import { userReducer } from './users';

export default combineReducers({
    admin: adminReducer,
    auth: authReducer,
    chat: chatReducer,
    dosespot: doseSpotReducer,
    patients: patientsReducer,
    users: userReducer
});