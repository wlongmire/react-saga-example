export {
    ActionType,
    login,
    loginFail,
    loginSuccess,
    logout,
    logoutSuccess,
    logoutFail
} from './actions';

<<<<<<< HEAD
export { Login, LoginContainer, LogoutButton, ConnectedLogoutButton} from './components';
export { default as authSaga } from './sagas';
export { AuthState, AuthInfo, default as authReducer } from './reducer';

// import { 
//     ActionType, 
//     login,
//     loginFail,
//     loginSuccess
// } from './actions';



// export const Actions = {
//     ActionType, 
//     login,
//     loginSuccess,
//     loginFail
// };

// export const Components = {
//     LoginContainer,
//     Login,
//     LogoutButton,
//     ConnectedLogoutButton
// };

// export const Sagas = {
//     root
// };  

// export const Reducers = {
//     root: reducer
// };
=======
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
>>>>>>> origin/develop
