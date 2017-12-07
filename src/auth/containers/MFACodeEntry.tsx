import * as React from 'react';
import { connect } from 'react-redux';

import MFACodeEntryForm from '../components/MFACodeEntry/MFACodeEntryForm';
import { verifyCode, resendCode } from '../actions';
import { GlobalState } from '../../common';

interface MFACodeEntryProps {
    phoneHint: string;
    verifyCode: (code: string) => void;
    resendCode: () => void;
    codeVerificationError: string;
}

class MFACodeEntry extends React.Component<MFACodeEntryProps, {}> {
    render() {
        return (
            <MFACodeEntryForm {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        phoneHint: state.auth.auth ? state.auth.auth.phoneHint : '',
        codeVerificationError: state.auth.clientTokenVerificationError
    };
};

const mapDispatchToProps = {
    verifyCode,
    resendCode
};

export default connect(mapStateToProps, mapDispatchToProps)(MFACodeEntry);