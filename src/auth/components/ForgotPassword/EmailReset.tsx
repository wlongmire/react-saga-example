import * as React from 'react';
import * as Common from '../common';
import {Link} from 'react-router-dom';
import './styles.css';


interface S {
    resetButtonClicked : boolean;
    email: string
}


export class EmailResetForm extends React.Component<{}, S>{
    constructor(){
        super();
        this.state = {
            resetButtonClicked: false,
            email: ''
        }
    }

    _handleClickResetPassword = (event: any) => {
        event.preventDefault();
        this.setState({
            resetButtonClicked: true
        })
    }

    handleChangeOnReset = (e:any) => {
        this.setState({
            email: e.target.value
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
            <form className="reset-body" onSubmit={this._handleClickResetPassword}>
                <h2 className="text">
                    Enter Your Email, and we'll send you instructions
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
                />
                 

            </form>
            }
            </div>
        )
    }
}

