import * as React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { ActionResult } from '../../../common';
import { AuthLoginCredentials } from '../../../services/auth';
import { AuthState } from '../../reducer';
import { connect } from 'react-redux';
import { login } from '../../actions';

import './Login.css';

/**
 * 
 */
export class LoginComponentProps {
  login: (credentials: AuthLoginCredentials) => ActionResult<AuthLoginCredentials>;
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
  onEmailChange(event: object, newValue: string) {
    this.setState(
      { email: newValue }, 
      () => this.validate() 
    );
  }

  /**
   * Handle for password changes.
   * @param event 
   * @param newValue 
   */
  onPasswordChange(event: object, newValue: string) {
    this.setState(
      { password: newValue },
      () => this.validate()
    );
  }

  /**
   * Handler for submit button.
   */
  onSubmit() {
    if (this.props.login) {
      this.props.login(new AuthLoginCredentials(this.state.email, this.state.password));
    }
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
    const fieldStyle = {
          display: 'block'
        };

    return (
      <div className="login-form">
        <Paper zDepth={2}>
          <h2 className="login-label">LifeCo EHR</h2>
          <TextField
            className="login-email-input"
            style={fieldStyle}
            floatingLabelText="Email"
            type="email"
            onChange={this.onEmailChange}
          />
          <TextField
            className="login-password-input"
            style={fieldStyle}
            floatingLabelText="Password"
            type="password"
            onChange={this.onPasswordChange}
          />
          <div className="login-submit-button-container">
            <RaisedButton
              className="login-submit-button"
              label="Sign In"
              primary={true}
              disabled={!this.state.isValid}
              onClick={this.onSubmit}
            />
          </div>
          {this.props.auth.authError &&
            <div>
              <p className="error-label">
                { this.props.auth.authError }
              </p>
            </div>
          }
        </Paper>
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