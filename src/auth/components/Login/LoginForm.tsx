import * as React from 'react';
import { Link } from 'react-router-dom';
import * as uuidv4 from 'uuid/v4';

import HeaderLabel from '../common/HeaderLabel';
import * as authApi from '../../../common/api/auth';
import { ActionResult } from '../../../common';
import { AuthState, AuthCredentials } from '../../../common';

import './LoginForm.css';

const FaSlashEye = require('react-icons/lib/fa/eye-slash');

interface LoginProps {
    login: (credentials: AuthCredentials) => ActionResult<AuthCredentials>;
    auth: AuthState;
} 

interface LoginState {
    password: string;
    isValid: boolean;
    email: string;
}

class LoginForm extends React.Component<LoginProps, LoginState> {
    state = {
        email: '',
        password: '',
        isValid: false
    };

    handleEmailChange = (event: any) => {
        this.setState(
            { email: event.target.value }, 
            () => this.validate()
        );
    }

    handlePasswordChange = (event: any) => {
        this.setState(
            { password: event.target.value }, 
            () => this.validate()
        );
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        const deviceId = authApi.fetchDeviceId() || uuidv4();
        this.props.login(new AuthCredentials(this.state.email, this.state.password, deviceId));
    }

    validate() {
        this.setState({ isValid: (this.state.email.length > 0 && this.state.password.length > 0) });
    }

    render() {
        return (
            <div id="wrapper-login">
                <HeaderLabel />
                <div className="intro">Welcome to LifeCo</div>
                <div className="login-body">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input
                            name="email"
                            type="email"
                            className="login-email-input"
                            placeholder="Email"
                            onChange={this.handleEmailChange}
                            required={true}
                        />
                        <input
                            name="password"
                            type="password"
                            className="login-password-input"
                            placeholder="Password"
                            required={true}
                            onChange={this.handlePasswordChange}
                        />
                        {this.props.auth.authError &&
                            <div>
                                <p className="error-label">
                                    {this.props.auth.authError}
                                </p>
                            </div>
                        }
                        <input
                            type="submit"
                            className="login-submit-button"
                            placeholder="Email"
                            value="Log In"
                            disabled={!this.state.isValid}
                        />
                    </form>
                    <span className="slashIcon">
                        <FaSlashEye />
                    </span>
                    <Link to="/reset-password" className="forgot-password">Forgot Password</Link>
                </div>
            </div>
        );
    }
}

export default LoginForm;