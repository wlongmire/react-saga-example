import ApplicationState from '../common';
/**
 * Selectors help us take the appropriate slice of state we need to be able 
 * to manage our application.
 * @param state
 */

 export const getAllPatients = (state: ApplicationState.IState) => state.patients;

