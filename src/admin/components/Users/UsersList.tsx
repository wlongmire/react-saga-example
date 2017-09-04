import * as React from 'react';
import './styles.css';

interface IUser{
    avatar: string;
    type: string;
    firstName: string;
    lastName:string;
    email: string;

}
interface P{
    users : Array<IUser>
}
const UsersList = (props: P) => {
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
                props.users.map((user:IUser, index:number)=>{
                    return(
                        <tr key={index}>
                            <td><img className="user-avatar" src={user.avatar}/></td>
                            <td>{user.type}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
    )
}

export default UsersList;