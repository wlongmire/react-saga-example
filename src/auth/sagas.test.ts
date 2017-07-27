import { AuthService } from '../services';
import * as Common from '../common';
import * as actions from './actions';
import { call, put } from 'redux-saga/effects';
import { login } from './sagas';
import { LoginCredentials } from '../services/auth';

test('login saga', () => {
    const email = 'test@email.com';
    const password = 'password';

    const credentials = new LoginCredentials(email, password)

    const action = <Common.ActionResult<LoginCredentials>>{ 
        type: actions.ActionType.LOGIN, 
        value: credentials
    };

    const generator = login(action);

    let next = generator.next(credentials);
    expect(next.value).toEqual(call(AuthService.login, credentials));

    next = generator.next({ error: 'test' });
    expect(next.value).toEqual(put(actions.loginSuccess()));
});