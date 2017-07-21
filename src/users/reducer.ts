import * as Common from '../common';
import * as Actions from './actions';
import ApplicationState from '../common';

/**
 * Initial Reducer state
 */

 const initialState = (state: ApplicationState.IState) => state.patients;

 /**
  * Redux reducer
  * @param state
  * @param action
  */

  export function reducer(state = initialState, action: Common.ActionResult<{}>){
      switch(action.type){
        case Actions.ActionType.LOAD_ALL_PATIENTS:
            return Object.assign({}, initialState)
        case Actions.ActionType.LOAD_ALL_PATIENTS_SUCCESS:
            return Object.assign({}, initialState, {patients: action.value})
        case Actions.ActionType.LOAD_ALL_PATIENTS_FAILURE:
            return Object.assign({}, initialState, {error: action.value})
          default: 
          return state
      }
  }