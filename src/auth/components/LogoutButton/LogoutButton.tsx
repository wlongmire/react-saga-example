import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './LogoutButton.css';

/**
 * 
 */
export class LogoutButtonComponentProps {
    logout: () => void;
}

/**
 * Display element for logout button.
 */
export class LogoutButton extends React.Component<LogoutButtonComponentProps, {}> {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handles the button click.
   */
  onSubmit() {
    if (this.props.logout) {
      this.props.logout();
    }
  }

  /**
   * Renders the element in the dom.
   */
  render() {
    return (
        <RaisedButton
            className="login-submit-button"
            label="Sign Out"
            primary={true}
            onClick={this.onSubmit}
        />
    );
  }
}