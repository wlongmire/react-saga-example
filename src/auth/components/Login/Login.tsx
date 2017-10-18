import * as React from 'react';
import { ActionResult } from '../../../common'
import { AuthState, AuthCredentials } from '../../reducer';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Link } from 'react-router-dom';
import * as Common from '../common';

import './Login.css';

const FaSlashEye = require('react-icons/lib/fa/eye-slash');

/**
 * 
 */
export class LoginComponentProps {
  login: (credentials: AuthCredentials) => ActionResult<AuthCredentials>;
  auth: AuthState;
}

/**
 * 
 */
class LoginComponentState {
  email: string;
  password: string;
  isValid: boolean;
}

/**
 * Display element for login.
 */
export class Login extends React.Component<LoginComponentProps, LoginComponentState> {
  
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isValid: false
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.validate = this.validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handler for email changes.
   * @param event 
   * @param newValue 
   */

  onEmailChange(event: object) {
    this.setState({
      email: event['target'].value
    }, () => this.validate())
  }

  /**
   * Handle for password changes.
   * @param event 
   * @param newValue 
   */
  onPasswordChange(event: object) {
    this.setState({
      password: event['target'].value
    }, () => this.validate())
  }

  /**
   * Handler for submit button.
   */
  onSubmit(event: any) {
    event.preventDefault()
    this.props.login(new AuthCredentials(this.state.email, this.state.password));
  }

  /**
   * Validates the email and password values and sets the state accordingly.
   */
  validate() {
    this.setState({ isValid: (this.state.email.length > 0 && this.state.password.length > 0) });
  }
  /**
   * Renders the element in the dom.
   */

  render() {
    return (
      <div id="wrapper-login">
        <Common.HeaderLabel/>
        <div className="intro">Welcome to LifeCo</div>
        <div className="login-body">
          <form className="login-form" onSubmit={this.onSubmit}>
            <input
              name="email"
              type='email'
              className="login-email-input"
              placeholder="Email"
              onChange={this.onEmailChange}
              required={true}
            />
            <input
              name="password"
              type='password'
              className="login-password-input"
              placeholder="Password"
              required={true}
              onChange={this.onPasswordChange}
            />
            {this.props.auth.authError &&
            <div>
              <p className="error-label">
                { this.props.auth.authError }
              </p>
            </div>
            }
            <input
              type='submit'
              className="login-submit-button"
              placeholder="Email"
              value="Log In"
              disabled={!this.state.isValid}
            />
          </form>
          <span className="slashIcon">
            <FaSlashEye />
          </span>
          <Link to="/reset-password" className="forgot-password">Forgot Password</Link>
        </div>
      </div>
    );
  }
}

type Store = {
  auth: AuthState
}

const mapStateToProps = (state: Store) => ({
  auth: state.auth
});

/**
 * Connected display component for login.
 */
export const LoginContainer = connect(
  mapStateToProps,
  { login }
)(Login);