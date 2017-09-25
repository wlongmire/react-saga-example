import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';

import { Users } from '../';

import './AdminPage.css';

interface AdminPageState {}

export class AdminPage extends React.Component<{}, AdminPageState> {

    constructor() {
        super();

        this.state = {

        };
    }

    handleActive(tab: Tab) {
        // alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
      }
      
    render() {
        
        return(
            <div className="admin-page-wrapper">
                <h2 className="admin-title">Admin</h2>
                <Tabs>
                    <Tab label="Manage Users" >
                        <div>
                            <Users />
                        </div>
                    </Tab>
                    <Tab label="Dosespot" onActive={this.handleActive} >
                        <div>
                            <table className="users-table">
                            <thead>
                                <tr>
                                    <td>Clincian ID</td>
                                    <td>Refill Requests</td>
                                    <td>Transactions</td>
                                    <td>Pending Prescriptions</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>28486</td>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>
                                        <IconButton tooltip="Font Icon">
                                            <i className="material-icons red">error</i>
                                        </IconButton>
                                    </td>
                                </tr>
                                {/* {
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
                                } */}
                            </tbody>
                            </table>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}