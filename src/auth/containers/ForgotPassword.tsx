import * as React from 'react';
import { connect } from 'react-redux';

import { forgotPassword } from '../actions';
import ForgotPasswordFormProps from '../components/ForgotPassword/ForgotPasswordForm';

interface ForgotPasswordProps {
    forgotPassword: (email: string) => void;
}

export class ForgotPassword extends React.Component<ForgotPasswordProps, {}> {
    render() {
        return(
            <ForgotPasswordFormProps forgotPassword={this.props.forgotPassword}/>
        );
    }
}

const mapDispatchToProps = {
    forgotPassword
};

export default connect(null, mapDispatchToProps)(ForgotPassword);