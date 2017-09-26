import * as React from 'react';
import * as Auth from '../../../auth';
import { AuthLoginCredentials } from '../../../services/auth';
import { ActionResult } from '../../../common';

import './Login.zoo.css';

/**
 * 
 */
export class LoginZoo extends React.Component<{}, {}> {
  constructor() {
    super();

    this.login = this.login.bind(this);
  }

  login(credentials: AuthLoginCredentials) {
    return new ActionResult<AuthLoginCredentials>();
  } 

  onSubmit(credentials: AuthLoginCredentials) {
    // todo: display submit info
  }

  render() {
    const props = {
      login: this.login,
      auth: {
          isAuthenticated: false,
          clientToken: undefined,
          userRole: undefined,
          userChannel: undefined,
          authError: undefined
      }
    }
    return (
      <div className="login-zoo">
        <h1>Login Components</h1>
        <div>
            <Auth.Login {...props} />
        </div>
        <div>
          <h4>Usage</h4>
          <code>{'<Login.Components.Login />'}</code>
        </div>
      </div>
    );
  }
}
