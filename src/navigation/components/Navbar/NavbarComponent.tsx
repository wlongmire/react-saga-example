import * as React from 'react';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { DosespotClinicianStatus, Identity } from '../../../common';

import './Navbar.css';

interface NavbarProps {
    identity: Identity;
    dosespotStatus: DosespotClinicianStatus;
    logout: () => void;
}

interface NavbarState {
    dialogOpen: boolean;
    dialogUrl?: string;
}

const style = {
    dialogCloseButton: {
        backgroundColor: "#67B2A6"
    },
    rightIcon: {
        textAlign: 'center',
        lineHeight: '24px',
        color: 'red'
    }
};

class NavbarComponent extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = {
            dialogOpen: false
        };
    }

    componentWillReceiveProps(props: NavbarProps) {
        if (this.state.dialogOpen) {
            return;
        }

        this.setState({
            dialogUrl: props.dosespotStatus.url
        });
    }

    handleClose = () => {
        this.setState({
            dialogOpen: false
        });
    }

    handleDosespotClick = () => {
        this.setState({
            dialogOpen: true
        });
    }

    handleLogoutClick = () => {
        this.props.logout();
    }

    dialogActions = [
        <RaisedButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
        />
    ];

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
                        className={
                            classnames(
                                'lc-nav-action-menu right',
                                {'with-alerts': this.props.dosespotStatus 
                                    ? this.props.dosespotStatus.transactionErrorsCount > 0 
                                    : false
                                }
                            )
                        }
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
                        {this.props.dosespotStatus.transactionErrorsCount > 0 &&
                            <MenuItem 
                                primaryText="Dosespot Status" 
                                rightIcon={<b style={style.rightIcon}>{this.props.dosespotStatus.transactionErrorsCount}</b>}
                                onClick={this.handleDosespotClick} 
                            />
                        }
                        <MenuItem primaryText="Sign out" onClick={this.handleLogoutClick} />
                    </IconMenu>
                    <ul className="lc-nav-top right">
                        <li><Link to="/app/">Home</Link></li>
                        <li><Link to="/app/schedule">Schedule</Link></li>
                        <li><Link to="/app/admin">Admin</Link></li>
                    </ul>
                </div>
                <hr/>
                <Dialog
                    title="DoseSpot"
                    modal={true}
                    actions={[
                        <RaisedButton
                            label="Close"
                            style={style.dialogCloseButton}
                            primary={true}
                            onClick={this.handleClose}
                        />
                    ]}
                    bodyStyle={{
                        padding: 0
                    }}
                    style={{
                        maxWidth: null
                    }}
                    contentStyle={{
                        maxWidth: 1000
                    }}
                    open={this.state.dialogOpen}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <div className="admin-dosespot-dialog-wrapper">
                        <iframe className="admin-dosespot-iframe" src={this.state.dialogUrl} />
                    </div>
                </Dialog>
            </nav>
        );
    }
}

export default NavbarComponent;