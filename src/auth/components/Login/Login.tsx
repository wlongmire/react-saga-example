import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { LoginCredentials } from '../../../services/auth';
import { ActionResult } from '../../../common';

import './Login.css';

/**
 * 
 */
export class LoginComponentProps {
  login: (credentials: LoginCredentials) => ActionResult<LoginCredentials>;
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
   * 
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
   * 
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
   * 
   */
  onSubmit() {
    if (this.props.login) {
      this.props.login(new LoginCredentials(this.state.email, this.state.password));
    }
  }

  /**
   * 
   */
  validate() {
    this.setState({isValid: (this.state.email.length > 0 && this.state.password.length > 0)});
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
          <h2 className="login-label">Login</h2>
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
          <RaisedButton
            className="login-submit-button"
            label="Sign In"
            primary={true}
            disabled={!this.state.isValid}
            onClick={this.onSubmit}
          />
        </Paper>
      </div>
    );
  }
}