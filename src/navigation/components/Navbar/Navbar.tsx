import * as React from 'react';
import { connect } from 'react-redux';
import { Identity } from '../../../common';
import { logout } from '../../../auth';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../common';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

import './Navbar.css';

interface NavbarProps {
    identity: Identity;
    logout: () => void;
}

class _Navbar extends React.Component<NavbarProps, {}> {

    constructor() {
        super();
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        this.props.logout();
    }

    render() {
        const { identity } = this.props;
        let userFirstInitial: string = '';

        if (identity && identity.userInfo && identity.userInfo.first) {
            userFirstInitial = identity.userInfo.first.substr(0, 1);
        }

        return (
            <nav className="lc-nav">
                <div className="lc-nav-wrapper">
                    <Link className="lc-brand-logo" to="/">LifeCo</Link>
                    <IconMenu 
                        className="lc-nav-action-menu right" 
                        iconButtonElement={
                            <Avatar 
                                backgroundColor="#67B2A6"
                                color="#ffffff">
                                { userFirstInitial }
                            </Avatar>
                        }
                        anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                        <MenuItem value="1" primaryText="Sign out" onClick={this.handleLogoutClick} />
                    </IconMenu>
                    <ul className="lc-nav-top right">
                        <li><Link to="/app/">Home</Link></li>
                        {/* <li><Link to="/">Monitor</Link></li> */}
                        <li><Link to="/app/schedule">Schedule</Link></li>
                        {/* <li><Link to="/">Profile</Link></li> */}
                        <li><Link to="/app/admin">Admin</Link></li>
                    </ul>
                </div>
                <hr/>
            </nav>
        )
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        identity: state.auth.identity
    }
}

export const Navbar = connect(
    mapStateToProps,
    { logout }
)(_Navbar);