import * as React from 'react';
import UsersList from './UsersList';
// import {Navigation} from '../../../navigation/components/Navigation';
import {Link} from 'react-router-dom';

export class Users extends React.Component<{}, {}>{
    render(){
        return(
            <div>
            {/* <Navigation/> */}
            <div className="main-section">
            <div className="action-bar">
                <span className="users-title">Users</span>
                <span className="create-new"><Link to="/users/add" className="new-user">+ Create New</Link></span>
            </div>
            <UsersList
            users={[
            {
                avatar: "https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
                type:"Patient",
                firstName: "Richard",
                lastName: "Cornew",
                email:"rich@life.co"
            },
            {
                avatar: "https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
                type:"Ops",
                firstName: "Alex",
                lastName: "Magana",
                email:"magana@life.co"
            }
            
            ]}
            
            />
            </div>
            </div>
        )
    }
}