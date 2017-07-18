import * as React from 'react';
import * as Login from '../../../login';

import './Login.zoo.css';

/**
 * 
 */
export class LoginZoo extends React.Component<{}, {}> {
  render() {
    return (
      <div className="login-zoo">
        <h1>Login Components</h1>
        <div>
            <Login.Components.Login />
        </div>
        <div>
          <h4>Usage</h4>
          <code>{'<Login.Components.Login />'}</code>
        </div>
      </div>
    );
  }
}
