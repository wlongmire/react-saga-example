import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { createUser, updateUser, clearSnackbarMessage } from '../actions';
import { UserArgs, GlobalState, SnackbarMessage } from '../../common';
import UserDetailForm from '../components/UserDetail/UserDetailForm';

export interface UserDetailProps extends RouteComponentProps<{userId: string}> {
    snackbarMessage: SnackbarMessage;
    clinicId?: number;
    clinicianId?: number;
    createUser: (userArgs: UserArgs) => void;
    updateUser: (userArgs: UserArgs) => void;
    clearSnackbarMessage: () => void;
}

export class UserDetail extends React.Component<UserDetailProps, {}> {
    render() {
        return(
            <UserDetailForm {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    let clinicId;
    let clinicianId;

    const userInfo = state.auth.identity ? state.auth.identity.userInfo : undefined;
    
    if (userInfo) {
        clinicId = userInfo.clinicId;
        clinicianId = userInfo.clinicianId;
    }

    return {
        snackbarMessage: state.users.snackbarMessage ? state.users.snackbarMessage.message : '',
        clinicId: clinicId,
        clinicianId: clinicianId
    };
};

const mapDispatchProps = {
    clearSnackbarMessage,
    createUser,
    updateUser
};

export default connect<{}, UserDetailProps, {}>(mapStateToProps, mapDispatchProps)(UserDetail);