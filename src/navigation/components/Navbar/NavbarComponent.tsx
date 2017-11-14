import * as React from 'react';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import { Identity } from '../../../common';

import './Navbar.css';

interface NavbarProps {
    identity: Identity;
    logout: () => void;
}

class NavbarComponent extends React.Component<NavbarProps, {}> {
    handleLogoutClick = () => {
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
                            <IconButton
                                style={{padding: 0}}
                            >
                                <Avatar 
                                    backgroundColor="#67B2A6"
                                    color="#ffffff"
                                >
                                    {userFirstInitial}
                                </Avatar>
                            </IconButton>
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
        );
    }
}

export default NavbarComponent;