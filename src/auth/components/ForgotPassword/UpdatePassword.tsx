import * as React from 'react';
import * as Common from '../common';
import {Link} from 'react-router-dom';


import './styles.css';

interface S {
    resetSuccesful : boolean
}

export class UpdatePasswordForm extends React.Component<{}, S>{
    constructor(){
        super()
        this.state = {
            resetSuccesful: false
        }
    }

    _handleSuccessfulReset = (event: any) => {
        event.preventDefault();
        this.setState({
            resetSuccesful: true
        })
    }
    render(){
        return(
            <div>
            <Common.Components.HeaderLabel/>
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
            <form className="update-body">
                <h2>Update your password</h2>
                <h2 className="text">
                    Please use 8 characters (one number, one symbol)
                </h2>
                <input
                className="reset-password-input"
                placeholder="New Password"
                type="password"

                />

                <input
                className="repeat-password-input"
                placeholder="Confirm Password"
                type="password"

                />

                <input
                className="reset-password-button"
                type="submit"
                onClick={this._handleSuccessfulReset}
                value="Reset Password"
                />

            </form>
            }
            </div>
        )
    }
}