import * as React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/Login/LoginForm';
import { ActionResult } from '../../common';
import { AuthState, AuthCredentials } from '../../common';
import { login } from '../actions';

interface LoginProps {
    login: (credentials: AuthCredentials) => ActionResult<AuthCredentials>;
    auth: AuthState;
}

export class Login extends React.Component<LoginProps, {}> {
    render() {
        return (
            <LoginForm login={this.props.login} auth={this.props.auth}/>
        );
    }
}

type Store = {
    auth: AuthState
};

const mapStateToProps = (state: Store) => ({
    auth: state.auth
});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);