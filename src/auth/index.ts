import { 
    ActionType, 
    login,
    loginFail,
    loginSuccess
} from './actions';

<<<<<<< HEAD
import { Login, LoginContainer } from './components';

import { root } from './sagas';

=======
import { LoginCredentials } from './model';
import { Login, LoginContainer } from './components';

>>>>>>> auth + login updates
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

<<<<<<< HEAD
export const Sagas = {
    root
=======
export const Model = {
    LoginCredentials
>>>>>>> auth + login updates
};