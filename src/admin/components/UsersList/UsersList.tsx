import * as React from 'react';

import { User } from '../../../common/models/user';

import './styles.css';

interface UserListProps {
    users: User[];
}

const UsersList = (props: UserListProps) => {
    return(
        <table className="users-table">
        <thead>
            <tr>
                <td></td>
                <td>Type</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {
                props.users.map((user: User, index: number) => {
                    return(
                        <tr key={index}>
                            {/* Add user avatar */}
                            <td><img className="user-avatar" src=""/></td>
                            <td>{user.type}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    );
                })
            }
        </tbody>
        </table>
    );
};

export default UsersList;