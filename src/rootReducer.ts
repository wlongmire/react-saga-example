import { combineReducers } from 'redux';
import { cases } from './cases';

const casesReducer = cases.reducer;
// todo: ... other reducers

export default combineReducers({
    casesReducer
});