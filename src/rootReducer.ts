import { combineReducers } from 'redux';
import * as Cases from './cases';

const casesReducer = Cases.Reducers.root;
// todo: ... other reducers

export default combineReducers({
    casesReducer
});