import * as React from 'react';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="lc-nav">
            <div className="lc-nav-wrapper">
                <Link className="lc-brand-logo" to="/">LifeCo</Link>
                <IconMenu 
                    className="lc-nav-action-menu right" 
                    iconButtonElement={
                        <Avatar 
                            backgroundColor="#f84445"
                            color="#ffffff"
                            size={48}>
                            A
                        </Avatar>
                    }
                    anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem value="1" primaryText="Sign out" />
                </IconMenu>
                <ul className="lc-nav-top right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Monitor</Link></li>
                    <li><Link to="/schedule">Schedule</Link></li>
                    <li><Link to="/">Profile</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                </ul>
            </div>
            <hr/>
        </nav>
    )
}