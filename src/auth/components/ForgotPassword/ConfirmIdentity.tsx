import * as React from 'react';
import './styles.css';
import * as Common from '../common';
import {Link} from 'react-router-dom';


interface S {
    code : string;
    validationError: string
}

export class ConfirmIdentity extends React.Component<{}, S>{
    constructor(){
        super();
        this.state = {
            code: '' , 
            validationError:''
        }
    }

    sendCode = () => {

    }

    _onChangeIdCode = () => {

    }
    render(){
        return(
            <div>
                <Common.HeaderLabel/>
                <div className="confirm-id-body">
                <h2 className="bold">
                    Confirm your identity to update password
                </h2>
                <p className="text-content">We sent an SMS with a code to your phone ***-***-71. Please enter it below</p>
                <form className="confirm-id-form" onSubmit={this.sendCode}>

                <input
                className="confirm-id-code"
                placeholder="Code"
                type="number"
                name="confirm-id-code"
                onChange={this._onChangeIdCode}
                />
        
                <h5 className="error-label">{this.state.validationError}</h5>
                
                <input
                className="confirm-id-btn"
                type="submit"
                value="Submit Code"
                />
                </form>
                <p className="text-content-small">Wrong phone number? Email at hello@life.co</p>
                <p className="text-content-small link-color"><Link style={{color:'#F42C3D'}} to="reset-password">Resend Code</Link></p>
                </div>
             
            </div>
        )
    }
}