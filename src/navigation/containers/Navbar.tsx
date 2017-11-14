import * as React from 'react';
import { connect } from 'react-redux';

import auth from '../../auth';
import { Identity, GlobalState } from '../../common';
import NavbarComponent from '../components/Navbar/NavbarComponent';

interface NavbarProps {
    identity: Identity;
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
        identity: state.auth.identity
    };
};

const mapDispatchToProps = {
    logout: auth.actions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);