import * as React from 'react';
import * as Common from '../common';
import {Link} from 'react-router-dom';
import './styles.css';


interface S {
    resetButtonClicked : boolean
}


export class EmailResetForm extends React.Component<{}, S>{
    constructor(){
        super();
        this.state = {
            resetButtonClicked: false
        }
    }

    _handleClickResetPassword = (event: any) => {
        event.preventDefault();
        this.setState({
            resetButtonClicked: true
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
                    Enter Your Email, and we'll send you instructions
                    on how to reset your password.
                </h2>
                <input
                className="email-reset-input"
                placeholder="Email"
                type="email"
                required={true}

                />

                <input
                className="email-reset-button"
                type="submit"
                value="Send reset instructions"
                onClick={this._handleClickResetPassword}
                />

            </form>
            }
            </div>
        )
    }
}

