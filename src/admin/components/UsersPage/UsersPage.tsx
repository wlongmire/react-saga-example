import * as React from 'react';

import UsersList from '../UsersList/UsersList';
import { User } from '../../../common/models/user';
import { Link } from 'react-router-dom';

import './styles.css';

interface UsersPageProps {
    users: User[];
}

export class UsersPage extends React.Component<UsersPageProps, {}> {
    render() {
        const { users } = this.props;

        return(
            <div>
            <div className="main-section">
            <div className="action-bar">
                <span className="users-title">Users</span>
                <span className="create-new"><Link to="/users/add" className="new-user">+ Create New</Link></span>
            </div>
            <UsersList users={users}/>
            </div>
            </div>
        );
    }
}