// import * as Model from './model';
import ApplicationState from '../common'

/**
 * Sample selector
 * @param state 
 */
export const getAllCases = (state: ApplicationState.IState) => state.cases;