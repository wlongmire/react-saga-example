import * as React from 'react';
import { Link } from 'react-router-dom';

import HeaderLabel from '../common/HeaderLabel';

import './UpdatePassword.css';

interface UpdatePasswordState {
    resetSuccesful: boolean;
    newPassword: string;
    confirmPassword: string;
    validReset: boolean;
    validationError?: string;
}

class UpdatePassword extends React.Component<{}, UpdatePasswordState> {
    state = {
        resetSuccesful: false,
        newPassword: '',
        confirmPassword: '',
        validReset: false,
        validationError: ''
    };

    handleResetPassword = (event: any) => {
        event.preventDefault();
        let newPass = this.state.newPassword;
        let confirmPass = this.state.confirmPassword;
        if (newPass.length >= 8 && confirmPass.length >= 8) {
            let reg = /^[a-z0-9]+$/i;
            let newPassIsAlpha = reg.test(newPass);
            let confirmPassIsAlpha = reg.test(confirmPass);
            if (!newPassIsAlpha || !confirmPassIsAlpha) {
                this.setState({
                    validationError: 'Please use at lease one number or symbol.'
                });
            } else if (newPass !== confirmPass) { 
                this.setState({
                    validationError: 'Passwords do not match.'
                });
            } else {
                this.setState({
                    validReset: true,
                    resetSuccesful: true
                });
            }
        } else {
            this.setState({
                validationError: 'Password is too short. Please use at least 8 characters.'
            });
        }
    }

    handleChangeNewPassword = (e: any) => {
        this.setState({
            newPassword: e.target.value
        });
    }

    handleChangeConfirmPassword = (e: any) => {
        this.setState({
            confirmPassword: e.target.value
        });
    }

    render() {
        return(
            <div>
                <HeaderLabel/>
                { this.state.resetSuccesful ? 
                    <div className="success">
                        <h2 className="success-message">Success!</h2>
                        <h2 className="text-response">
                            Please use your password with all LifeCo applications.
                        </h2>
                        <Link to ="/">
                            <input
                                className="home-redirect-btn"
                                type="submit"
                                value="LifeCo Home"
                            />
                        </Link>
                    </div>
                    :
                    <form className="update-body" onSubmit={this.handleResetPassword}>
                        <h2>Update your password</h2>
                        <h2 className="text">
                            Please use 8 characters (one number, one symbol)
                        </h2>
                        <input
                            className="reset-password-input"
                            placeholder="New Password"
                            name="newPassword"
                            type="password"
                            onChange={this.handleChangeNewPassword}
                            value={this.state.newPassword}

                        />
                        <input
                            className="repeat-password-input"
                            placeholder="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            onChange={this.handleChangeConfirmPassword}
                            value={this.state.confirmPassword}
                        />
                        <h5 className="error-label">{this.state.validationError}</h5>
                        <input
                            className="reset-password-button"
                            type="submit"
                            value="Reset Password"
                        />
                    </form>
                }
            </div>
        );
    }
}

export default UpdatePassword;