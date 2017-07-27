import { 
    ActionType, 
    login,
    loginFail,
    loginSuccess
} from './actions';

import { LoginCredentials } from './model';
import { Login, LoginContainer } from './components';

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

export const Model = {
    LoginCredentials
};