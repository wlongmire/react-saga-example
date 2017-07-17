import * as Model from './models';
import * as Common from '../common';

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
          default: 
            return state
      }
  }