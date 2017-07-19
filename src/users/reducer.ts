import * as Model from './models';
import * as Common from '../common';
import * as Actions from './actions';

/**
 * Initial Reducer state
 */

 const initialState : Model.ReducerState = {};

 /**
  * Redux reducer
  * @param state
  * @param action
  */

  export function reducer(state:Model.ReducerState = initialState, action: Common.ActionResult<{}>){
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