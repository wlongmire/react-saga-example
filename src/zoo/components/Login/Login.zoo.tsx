import * as React from 'react';
import * as Auth from '../../../auth';
import { LoginCredentials } from '../../../auth/model';

import './Login.zoo.css';

/**
 * 
 */
export class LoginZoo extends React.Component<{}, {}> {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(credentials: LoginCredentials) {
    // todo: display submit info
  }

  render() {
    return (
      <div className="login-zoo">
        <h1>Login Components</h1>
        <div>
            <Auth.Components.Login onSubmit={this.onSubmit} />
        </div>
        <div>
          <h4>Usage</h4>
          <code>{'<Login.Components.Login />'}</code>
        </div>
      </div>
    );
  }
}
