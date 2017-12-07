import * as React from 'react';
import { Link } from 'react-router-dom';

import HeaderLabel from '../common/HeaderLabel';

import './styles.css';

interface ConfirmIdentityState {
    code: string;
    validationError: string;
}

class ConfirmIdentity extends React.Component<{}, ConfirmIdentityState> {
    state = {
        code: '' , 
        validationError: ''
    };

    handleSubmit = () => {
        // TODO implement
    };

    handleChangeIdCode = () => {
        // TODO implement
    };

    render() {
        return(
            <div>
                <HeaderLabel />
                <div className="confirm-id-body">
                <h2 className="bold">
                    Confirm your identity to update password
                </h2>
                <p className="text-content">
                    We sent an SMS with a code to your phone ***-***-71. Please enter it below
                </p>
                <form className="confirm-id-form" onSubmit={this.handleSubmit}>
                    <input
                        className="confirm-id-code"
                        placeholder="Code"
                        type="number"
                        name="confirm-id-code"
                        onChange={this.handleChangeIdCode}
                    />
            
                    <h5 className="error-label">{this.state.validationError}</h5>
                    
                    <input
                        className="confirm-id-btn"
                        type="submit"
                        value="Submit Code"
                    />
                </form>
                <p className="text-content-small">Wrong phone number? Email at hello@life.co</p>
                <p className="text-content-small link-color">
                    <Link style={{color: '#F42C3D'}} to="reset-password">Resend Code</Link>
                </p>
                </div>
             
            </div>
        );
    }
}

export default ConfirmIdentity;