import * as React from 'react';
import * as Common from '../common';
import { connect } from 'react-redux';
import { verifyCode, resendCode } from '../../actions';
import { AuthInfo } from '../../../common';
import { GlobalState } from '../../../common';

import './MFACodeEntry.css';

interface MFACodeEntryProps {
    auth: AuthInfo;
    verifyCode: (code: string) => void;
    resendCode: () => void;
    codeVerificationError: string;
}

interface MFACodeEntryState {
    code: string;
}

class _MFACodeEntry extends React.Component<MFACodeEntryProps, MFACodeEntryState> {

    constructor() {
        super();
        this.state = {
            code: ''
        };
        this.handleChangeOnReset = this.handleChangeOnReset.bind(this);
        this.handleResendCode = this.handleResendCode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeOnReset = (e: any) => {
        this.setState({
            code: e.target.value
        });
    }

    handleResendCode = () => {

    }

    handleSubmit(e: any) {
        e.preventDefault();
        this.props.verifyCode(this.state.code);
    }

    render() {
        return (
            <div>
                <Common.HeaderLabel/>
                <form className="mfa-enter-code-body">
                    <h2 className="text">
                        We sent an SMS with a code to your phone <br />
                        number ***-***-**{this.props.auth ? this.props.auth.phoneHint : ''}. 
                        Please enter it below.
                    </h2>
                    <input
                        className="mfa-code-input"
                        name="code"
                        placeholder="Code"
                        onChange = {this.handleChangeOnReset}
                        required={true}
                    />
                    {this.props.codeVerificationError &&
                        <div className="mfa-code-verification-error">Incorrect code. Please try again.</div>
                    }
                    <input
                        className="mfa-code-submit-button"
                        type="button"
                        value="Submit Code"
                        onClick={this.handleSubmit}
                    />
                    <div className="mfa-resend-hint">Wrong phone number? Email hello@life.co</div>
                    <div className="mfa-resend-code-wrapper"><a className="mfa-resend-code-link" onClick={this.handleResendCode}>Resend Code</a></div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        auth: state.auth,
        codeVerificationError: state.auth.clientTokenVerificationError
    };
};

export const MFACodeEntry =  connect<{}, MFACodeEntryProps, {}>(
    mapStateToProps, 
    { 
        verifyCode, 
        resendCode 
    })(_MFACodeEntry);