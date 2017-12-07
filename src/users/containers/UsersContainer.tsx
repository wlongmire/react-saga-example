import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { GlobalState, User } from '../../common';
import { fetchAllUsers } from '../actions';
import Users from '../components/Users/Users';

export interface UsersContainerProps extends RouteComponentProps<{}> {
    users: Array<User>;
    fetchAllUsers: () => void;
}

class UsersContainer extends React.Component<UsersContainerProps, {}> {
    render() {
        return (
            <Users {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState ) => {
    return {
        users: state.users.items
    };
};

const mapDispatchToProps = {
    fetchAllUsers
};

export default connect<{}, UsersContainerProps, {}>(mapStateToProps, mapDispatchToProps)(UsersContainer);