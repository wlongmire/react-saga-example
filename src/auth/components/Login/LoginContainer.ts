import { connect } from 'react-redux';
import { login } from '../../actions';

import { Login } from './Login';

export const LoginContainer = connect(
    (state: object) => { 
      return state; 
    }, 
    {login}
  )(Login);