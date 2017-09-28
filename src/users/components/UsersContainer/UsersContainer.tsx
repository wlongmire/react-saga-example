import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../../../rootReducer';
import { fetchAllUsers } from '../../actions';
import { User } from '../../reducer';
import { UserList } from '../UserList';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import * as History from 'history';

import './UsersContainer.css';

export interface UsersContainerProps extends RouteComponentProps<{}> {
    users: Array<User>,
    fetchAllUsers: () => void
}

export interface UsersContainerState {}

export class _UsersContainer extends React.Component<UsersContainerProps, UsersContainerState> {

    constructor() {
        super();
        this.handleUserItemClick = this.handleUserItemClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    handleUserItemClick(user: User) {
        console.log(`${user.id} clicked`);
        const location: History.LocationDescriptor = {
            pathname: `/users/${user.id}`,
            state: { user }
        };
        this.props.history.push(location);
    }
 
    render() {
        return (
            <div className="content-container">
                <div className="content-container-title-bar">
                    <span className="inline-title">Users</span>
                    <span className="inline-title-actions">
                        <Link to="/users/add" className="inline-title-action-button">+ Create New</Link>
                    </span>
                </div>
                <UserList 
                    className="users-container-user-list" 
                    users={this.props.users}  
                    onItemClick={this.handleUserItemClick}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: GlobalState ) => {
    return {
        users: state.users.items
    }
};

export const UsersContainer =  connect<{}, UsersContainerProps, {}>(mapStateToProps, { fetchAllUsers })(_UsersContainer);