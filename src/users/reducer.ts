import * as Common from '../common';
import * as Actions from './actions';

/**
 * Initial Reducer state
 */

 /**
  * Redux reducer
  * @param state
  * @param action
  */

  export function reducer(state = [], action: Common.ActionResult<{}>){
      switch(action.type){
        case Actions.ActionType.LOAD_ALL_PATIENTS:
            return { ...state, state}
        case Actions.ActionType.LOAD_ALL_PATIENTS_SUCCESS:
            return { ...state , patients: action.value }
        case Actions.ActionType.LOAD_ALL_PATIENTS_FAILURE:
            return { ...state, error: action.value}
          default: 
          return state
      }
  }