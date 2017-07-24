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
            return { ...state, initialState}
        case Actions.ActionType.LOAD_ALL_PATIENTS_SUCCESS:
            return { ...state , patients: action.value }
        case Actions.ActionType.LOAD_ALL_PATIENTS_FAILURE:
            return { ...state, error: action.value}
          default: 
          return state
      }
  }