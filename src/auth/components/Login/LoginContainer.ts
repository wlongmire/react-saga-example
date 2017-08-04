import { connect } from 'react-redux';
import { login } from '../../actions';
import { Login } from './Login';

export default connect(
    null,
    { login }
  )(Login);