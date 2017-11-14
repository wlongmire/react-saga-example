import * as React from 'react';
import { connect } from 'react-redux';

import { GlobalState, SingleSignOnInfo } from '../../common';
import { fetchSingleSignOnInfo } from '../actions';
import DoseSpotUserForm from '../components/DoseSpotUser/DoseSpotUserForm';

interface DoseSpotUserProps {
    singleSignOn: SingleSignOnInfo;
    fetchSingleSignOnInfo: () => void;
}

class DoseSpotUser extends React.Component<DoseSpotUserProps, {}> {
    render() {
        return (
            <DoseSpotUserForm {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        singleSignOn: state.dosespot.sso
    };
};

const mapDispatchToProps = {
    fetchSingleSignOnInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(DoseSpotUser);