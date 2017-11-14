import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './LogoutButtonForm.css';

interface LogoutButtonFromProps {
    logout: () => void;
}

class LogoutButtonForm extends React.Component<LogoutButtonFromProps, {}> {
    handleSubmit = () => {
        if (this.props.logout) {
            this.props.logout();
        }
    }

    render() {
        return (
            <RaisedButton
                className="login-submit-button"
                label="Sign Out"
                primary={true}
                onClick={this.handleSubmit}
            />
        );
    }
}

export default LogoutButtonForm;