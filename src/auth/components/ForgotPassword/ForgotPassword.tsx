import * as React from 'react';
import * as Common from '../common';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { forgotPassword } from '../../actions';

import './ForgotPassword.css';

interface ForgotPasswordProps {
    forgotPassword: (email: string) => void;
}

interface ForgotPasswordState {
    resetButtonClicked : boolean;
    email: string
}

export class _ForgotPassword extends React.Component<ForgotPasswordProps, ForgotPasswordState>{
    constructor(){
        super();
        this.state = {
            resetButtonClicked: false,
            email: ''
        }

        this.handleChangeOnReset = this.handleChangeOnReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeOnReset = (e:any) => {
        this.setState({
            email: e.target.value
        });
    }

    handleSubmit(e: any) {
        e.preventDefault();
        this.setState({
            resetButtonClicked: true
        }, () => {
            this.props.forgotPassword(this.state.email);
        })
    }

    render(){
        return(
            <div>
                <Common.Components.HeaderLabel/>
                { this.state.resetButtonClicked ? 
                    <div className="thank-you-section">
                        <h2 className="thank-you-message">Thanks!</h2>
                        <h2 className="text-response">
                            Password reset instructions have been sent to the email you provided.
                        </h2>
                        <Link to ="/login">
                        <input
                            className="email-login-button"
                            type="submit"
                            value="Log in"
                        />
                        </Link>
                    </div> 
                    :
                    <form className="reset-body">
                        <h2 className="text">
                            Enter your email, and we'll send you instructions <br />
                            on how to reset your password.
                        </h2>
                        <input
                            className="email-reset-input"
                            name="email"
                            placeholder="Email"
                            type="email"
                            onChange = {this.handleChangeOnReset}
                            required={true}
                        />
                        <input
                            className="email-reset-button"    
                            type="submit"            
                            value="Send reset instructions"
                            onClick={this.handleSubmit}
                        />
                    </form>
                }
            </div>
        )
    }
}

export const ForgotPassword =  connect<{}, ForgotPasswordProps, {}>(null, { forgotPassword })(_ForgotPassword);