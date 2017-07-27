import { 
    ActionType, 
    login,
    loginFail,
    loginSuccess
} from './actions';

import { Login, LoginContainer } from './components';

import { root } from './sagas';

export const Actions = {
    ActionType, 
    login,
    loginSuccess,
    loginFail
};

export const Components = {
    LoginContainer,
    Login
};

export const Sagas = {
    root
};