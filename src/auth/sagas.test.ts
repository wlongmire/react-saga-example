import * as AuthService from './service';
import * as Common from '../common';
import * as actions from './actions';
import { call, put } from 'redux-saga/effects';
import { login } from './sagas';
import { AuthCredentials, AuthInfo, UserIdentity } from './reducer';

describe('auth sagas', () => {
    it('should generate a loginSuccess action', () => {
        const email = 'test@email.com';
        const password = 'password';
    
        const credentials = <AuthCredentials>{email, password};
        const identity = new UserIdentity(6, '71', 1, 1);
        const response = new AuthInfo('abacadaba', identity);
    
        const action = <Common.ActionResult<AuthCredentials>>{ 
            type: actions.ActionType.LOGIN, 
            value: credentials
        };
    
        const generator = login(action);
    
        let next = generator.next(credentials);
        expect(next.value).toEqual(call(AuthService.login, credentials.email, credentials.password));
    
        next = generator.next(response);
        expect(next.value).toEqual(put(actions.loginSuccess(response)));
    }); 
});