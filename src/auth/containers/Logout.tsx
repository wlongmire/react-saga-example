import * as React from 'react';
import { connect } from 'react-redux';

import LogoutButtonForm from '../components/LogoutButton/LogoutButtonForm';
import { logout } from '../actions';

export class LogoutProps {
    logout: () => void;
}

class Logout extends React.Component<LogoutProps, {}> {
    render() {
        return (
            <LogoutButtonForm logout={this.props.logout} />
        );
    }
}

const mapDispatchToProps = {
    logout
};

export default connect(null, mapDispatchToProps)(Logout);