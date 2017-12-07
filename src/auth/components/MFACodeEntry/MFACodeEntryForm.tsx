import * as React from 'react';

import HeaderLabel from '../common/HeaderLabel';

import './MFACodeEntryForm.css';

interface MFACodeEntryProps {
    phoneHint: string;
    verifyCode: (code: string) => void;
    resendCode: () => void;
    codeVerificationError: string;
}

interface MFACodeEntryState {
    code: string;
}

class MFACodeEntryForm extends React.Component<MFACodeEntryProps, MFACodeEntryState> {
    state = {
        code: ''
    };

    handleChangeOnReset = (e: any) => {
        this.setState({
            code: e.target.value
        });
    }

    handleResendCode = () => {
        // TODO implement
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.verifyCode(this.state.code);
    }

    render() {
        return (
            <div>
                <HeaderLabel />
                <form className="mfa-enter-code-body">
                    <h2 className="text">
                        We sent an SMS with a code to your phone <br />
                        number ***-***-**{this.props.phoneHint ?
                            this.props.phoneHint.substr(this.props.phoneHint.length - 2) : ''}.
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
                    <div className="mfa-resend-code-wrapper">
                        <a className="mfa-resend-code-link" onClick={this.handleResendCode}>Resend Code</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default MFACodeEntryForm;