import * as actions from './actions';
import { AuthLoginCredentials } from '../services/auth';
import * as Common from '../common';

describe('auth actions', () => {
    it('should create an action to login', () => {
        const credentials = new AuthLoginCredentials('email@life.co', 'test');
        const expectedAction: Common.ActionResult<AuthLoginCredentials> = {
            type: actions.ActionType.LOGIN,
            value: credentials
        };
        expect(actions.login(credentials)).toEqual(expectedAction);
    });
});