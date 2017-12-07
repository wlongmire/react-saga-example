import { combineReducers } from 'redux';
// import admin from './admin';
import auth from './auth';
import chat from './chat';
import dosespot from './dosespot';
import patients from './patients';
import users from './users';
import treatments from './treatments';
import visits from './visits';
import other from './other';

export default combineReducers({
    // admin: admin.reducer,
    auth: auth.reducer,
    chat: chat.reducer,
    dosespot: dosespot.reducer,
    patients: patients.reducer,
    treatments: treatments.reducer,
    users: users.reducer,
    visits: visits.reducer,
    other: other.reducer
});