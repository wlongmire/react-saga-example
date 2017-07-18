import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import './Login.css';

/**
 * Display element for login.
 */
export class Login extends React.Component<{}, {}> {

  render() {
    const fieldStyle = {
          display: 'block'
        };

    return (
      <div className="login-form">
        <Paper zDepth={2}>
          <TextField
            style={fieldStyle}
            floatingLabelText="Email"
            type="email"
          />
          <TextField
            style={fieldStyle}
            floatingLabelText="Password"
            type="password" 
          />
          <RaisedButton
            label="Sign In"
            primary={true}
          />
        </Paper>
      </div>
    );
  }
}