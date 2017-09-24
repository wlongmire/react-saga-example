import { 
    ActionType, 
    login,
    loginFail,
    loginSuccess
} from './actions';

import { 
    Login, 
    LoginContainer, 
    LogoutButton, 
    ConnectedLogoutButton,
    EmailResetForm,
    UpdatePasswordForm
} from './components';
import { root } from './sagas';
import { reducer } from './reducer';

export const Actions = {
    ActionType, 
    login,
    loginSuccess,
    loginFail
};

export const Components = {
    LoginContainer,
    Login,
    LogoutButton,
    ConnectedLogoutButton,
    EmailResetForm,
    UpdatePasswordForm
};

export const Sagas = {
    root
};  

export const Reducers = {
    root: reducer
};