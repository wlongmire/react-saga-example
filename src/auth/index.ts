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
    UpdatePasswordForm,
    LinkExpired,
    ConfirmIdentity

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
    UpdatePasswordForm,
    LinkExpired,
    ConfirmIdentity
};

export const Sagas = {
    root
};  

export const Reducers = {
    root: reducer
};