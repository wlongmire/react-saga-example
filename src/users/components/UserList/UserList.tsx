import * as classNames from 'classnames';
import * as React from 'react';
import { User } from '../../../common';
import Avatar from 'material-ui/Avatar';

import './UserList.css';

export interface UserListProps {
    users: Array<User>;
    className?: string;
    onItemClick?: (user: User) => void;
}

export interface UserListState {

}

export class UserList extends React.Component<UserListProps, UserListState> {

    constructor() {
        super();
        this.handleEditUser = this.handleEditUser.bind(this);
    }

    getUserAvatar(user: User): JSX.Element {
        // todo: handle avatar 
        return (
            <Avatar 
                backgroundColor="#f84445"
                color="#ffffff">
                {
                    (user.firstName !== null 
                    ? user.firstName.substr(0,1) 
                    : (user.lastName !== null ? user.lastName.substr(0,1) : ''))
                }
            </Avatar>
        )
    }

    handleEditUser(user: User) {
        if (this.props.onItemClick) {
            this.props.onItemClick(user);
        }
    }

    render() {
        return (
            <table className={classNames("list-table", this.props.className)}>
                <thead>
                    <tr>
                        <td className="table-column-icon"></td>
                        <td className="table-column-type">Type</td>
                        <td className="table-column-first-name">First Name</td>
                        <td className="table-column-last-name">Last Name</td>
                        <td className="table-column-email">Email</td>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.users.map((user: User) => {
                        return (
                            <tr key={user.id} className="list-table-hover-row" onClick={() => this.handleEditUser(user)}>
                                <td className="table-column-icon">
                                    { this.getUserAvatar(user) }
                                </td>
                                <td className="table-column-type">{user.type}</td>
                                <td className="table-column-first-name">{user.firstName}</td>
                                <td className="table-column-last-name">{user.lastName}</td>
                                <td className="table-column-email">{user.email}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}