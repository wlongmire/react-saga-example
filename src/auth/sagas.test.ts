import { AuthService } from '../services';
import * as Common from '../common';
import * as actions from './actions';
import { call, put } from 'redux-saga/effects';
import { login } from './sagas';
import { AuthLoginCredentials, AuthLoginResponse } from '../services/auth';

describe('auth sagas', () => {
    it('should generate a loginSuccess action', () => {
        const email = 'test@email.com';
        const password = 'password';
    
        const credentials = new AuthLoginCredentials(email, password);
        const response = new AuthLoginResponse('', 6, 1);
    
        const action = <Common.ActionResult<AuthLoginCredentials>>{ 
            type: actions.ActionType.LOGIN, 
            value: credentials
        };
    
        const generator = login(action);
    
        let next = generator.next(credentials);
        expect(next.value).toEqual(call(AuthService.login, credentials));
    
        next = generator.next(response);
        expect(next.value).toEqual(put(actions.loginSuccess(response)));
    }); 
});