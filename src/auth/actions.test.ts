import * as actions from './actions';
import { AuthCredentials } from '../common';
import * as Common from '../common';

describe('auth actions', () => {
    it('should create an action to login', () => {
        const credentials = new AuthCredentials('email@life.co', 'test');
        const expectedAction: Common.ActionResult<AuthCredentials> = {
            type: actions.ActionType.LOGIN,
            value: credentials
        };
        expect(actions.login(credentials)).toEqual(expectedAction);
    });
});