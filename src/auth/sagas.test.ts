import * as api from '../common/api';
import * as Common from '../common';
import * as actions from './actions';
import * as uuidv4 from 'uuid/v4';
import { call, put } from 'redux-saga/effects';
import { login } from './sagas';
import { AuthCredentials, AuthInfo } from '../common';

describe('auth sagas', () => {
    it('should generate a loginSuccess action', () => {
        const email = 'test@email.com';
        const password = 'password';
        const deviceId = uuidv4();
    
        const credentials = new AuthCredentials(email, password, deviceId);
        // const identity = new Identity(6, '71', 1, 1);
        const response = new AuthInfo('abacadaba', 1, 1, '00');
    
        const action = <Common.ActionResult<AuthCredentials>>{ 
            type: actions.ActionType.LOGIN, 
            value: credentials
        };
    
        const generator = login(action);
    
        let next = generator.next(credentials);
        expect(next.value).toEqual(call(api.auth.login, credentials.email, credentials.password, credentials.deviceId));
    
        next = generator.next(response);
        expect(next.value).toEqual(put(actions.loginSuccess(response)));
    }); 
});