import * as React from 'react';
import * as Auth from '../../../auth';
import { LoginCredentials } from '../../../services/auth';
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

  login(credentials: LoginCredentials) {
    return new ActionResult<LoginCredentials>();
  } 

  onSubmit(credentials: LoginCredentials) {
    // todo: display submit info
  }

  render() {
    return (
      <div className="login-zoo">
        <h1>Login Components</h1>
        <div>
            <Auth.Components.Login login={this.login} />
        </div>
        <div>
          <h4>Usage</h4>
          <code>{'<Login.Components.Login />'}</code>
        </div>
      </div>
    );
  }
}
