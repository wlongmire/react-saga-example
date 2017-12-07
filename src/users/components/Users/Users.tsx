import * as React from 'react';

import { Link, RouteComponentProps } from 'react-router-dom';

import { User } from '../../../common';
import * as History from 'history';
import UserList from '../UserList/UserList';

import './Users.css';

export interface UsersContainerProps extends RouteComponentProps<{}> {
    users: Array<User>;
    fetchAllUsers: () => void;
}

export interface UsersContainerState {}

export class Users extends React.Component<UsersContainerProps, UsersContainerState> {
    componentDidMount() {
        this.props.fetchAllUsers();
    }

    handleUserItemClick = (user: User) => {
        const location: History.LocationDescriptor = {
            pathname: `/app/user-detail/${user.id}`,
            state: { user }
        };
        this.props.history.push(location);
    }
 
    render() {
        return (
            <div className="content-container">
                <div className="alert alert-success hidden">
                    You have successfully added a new user!
                </div>
                <div className="content-wrapper">
                    <div className="content-container-title-bar">
                        <span className="title">Users</span>
                    </div>
                    <div className="content-container-action-bar">
                        <div className="action-left">{/**/}</div>
                        <div className="action-right">
                            <Link to="/app/user-add" className="right action-button">+ Create New</Link>
                        </div>
                    </div>
                    <UserList
                        className="users-container-user-list" 
                        users={this.props.users}  
                        onItemClick={this.handleUserItemClick}
                    />
                </div>
            </div>
        );
    }
}

export default Users;