import * as React from 'react';
import { connect } from 'react-redux';

import auth from '../../auth';
import { DosespotClinicianStatus, Identity, GlobalState } from '../../common';
import NavbarComponent from '../components/Navbar/NavbarComponent';

interface NavbarProps {
    identity: Identity;
    dosespotStatus: DosespotClinicianStatus;
    logout: () => void;
}

class Navbar extends React.Component<NavbarProps, {}> {
    render() {
        return(
            <NavbarComponent {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        identity: state.auth.identity,
        dosespotStatus: state.dosespot.status
    };
};

const mapDispatchToProps = {
    logout: auth.actions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);