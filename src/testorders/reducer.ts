import * as Common from '../common';
import * as Actions from './actions';

  export function reducer(state = [], action: Common.ActionResult<{}>){
      switch(action.type){
        case Actions.ActionType.LOAD_ALL:
            return { ...state, state}
        case Actions.ActionType.LOAD_ALL_COMPLETED:
            return { ...state , testorders: action.value }
        case Actions.ActionType.LOAD_ALL_FAILED:
            return { ...state, error: action.value}
        default: 
          return state
      }
  }