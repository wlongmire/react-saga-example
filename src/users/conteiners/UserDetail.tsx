import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { createUser, updateUser, clearSnackbarMessage } from '../actions';
import { User, GlobalState, SnackbarMessage } from '../../common';
import UserDetailForm from '../components/UserDetail/UserDetailForm';

export interface UserDetailProps extends RouteComponentProps<{userId: string}> {
    snackbarMessage: SnackbarMessage;
    createUser: (user: User) => void;
    updateUser: (user: User) => void;
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
    return {
        snackbarMessage: state.users.snackbarMessage ? state.users.snackbarMessage.message : ''
    };
};

const mapDispatchProps = {
    clearSnackbarMessage,
    createUser,
    updateUser
};

export default connect<{}, UserDetailProps, {}>(mapStateToProps, mapDispatchProps)(UserDetail);