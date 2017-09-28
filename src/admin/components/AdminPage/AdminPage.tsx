import * as React from 'react';
import { connect } from 'react-redux';
import { DoseSpotStatus, fetchDoseSpotStatus } from '../../';
import { GlobalState } from '../../../rootReducer';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
// import { DoseSpotClinicianList } from '../../../dosespot';
import { UsersContainer } from '../../../users';

// import { Users } from '../';

import './AdminPage.css';

interface AdminPageProps {
    statuses: DoseSpotStatus[];
    clinicians: number[];
    fetchDoseSpotStatus: () => void;
}

interface AdminPageState {
    isDoseSpotOpen: boolean;
}

export class _AdminPage extends React.Component<AdminPageProps, AdminPageState> {

    _doseSpotUrl = 'http://my.staging.dosespot.com/LoginSingleSignOn.aspx?SingleSignOnClinicId=1141&SingleSignOnUserId=28486&SingleSignOnPhraseLength=32&SingleSignOnCode=1TGFEFc99Fyu0oa4ndaIRwZ9e6XMfaUgeQzzdLnHo6j9DCsONTObhdegukATyPsaLkJsicN4ZtVdLDKQ1mCnJJi0Xjs2Uf8xbSq8TNoZgMl2uvNAWbuJvw&SingleSignOnUserIdVerify=8Dgtd7byVJkRyub7tE2ThA1HSZfxapoUbAd%2FxR5gjG1ZxwVqg92YSu82Okf05mWY6APSNHILbFiRw7hwak9qiw&RefillsErrors=1';

    constructor() {
        super();

        this.state = {
            isDoseSpotOpen: false
        };

        this.handleActive = this.handleActive.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
    }

    componentDidMount() {
        this.props.fetchDoseSpotStatus();
    }

    handleActive(tab: Tab) {
        // alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
    }

    handleCloseDialog() {
        this.setState({ isDoseSpotOpen: false });
    }

    handleOpenDialog() {
        this.setState({ isDoseSpotOpen: true });
    }

    render() {
        console.log(this.props.clinicians);
        
        return(
            <div className="admin-page-wrapper">
                <h2 className="admin-title">Admin</h2>
                <Tabs>
                    <Tab label="Manage Users" >
                        <div>
                            <UsersContainer />
                        </div>
                    </Tab>
                    <Tab label="Dosespot" onActive={this.handleActive} >
                        <div>                           
                            <table className="users-table">
                                <thead>
                                    <tr>
                                        <td>Clincian ID</td>
                                        <td>Refill Requests</td>
                                        <td>Transmission Errors</td>
                                        <td>Pending Prescriptions</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.statuses.map((status: DoseSpotStatus, index: number) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{status.clinicianId}</td>
                                                    <td>{status.refillRequestsCount}</td>
                                                    <td>{status.transactionErrorsCount}</td>
                                                    <td>{status.pendingPrescriptionsCount}</td>
                                                    <td>
                                                    <IconButton tooltip="View Details" onClick={this.handleOpenDialog}>
                                                        <i className="material-icons red">error</i>
                                                    </IconButton>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Tab>
                </Tabs>
                <Dialog
                    title="DoseSpot"
                    modal={true}
                    bodyStyle={{
                        padding: 0
                    }}
                    style={{
                        maxWidth: null
                    }}
                    contentStyle={{
                        maxWidth: 1000
                    }}
                    actions={[
                        <RaisedButton
                            label="Close"
                            primary={true}
                            onClick={this.handleCloseDialog} />
                    ]}
                    open={this.state.isDoseSpotOpen}
                    onRequestClose={this.handleCloseDialog}
                    autoScrollBodyContent={true}>
                    <div className="admin-dosespot-dialog-wrapper">
                        <iframe className="admin-dosespot-iframe" src={ this._doseSpotUrl } ></iframe>
                    </div>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps= (state: GlobalState) => {
    return {
        statuses: state.admin.items,
        clinicians: state.admin.clinicians
    }
}

export const AdminPage = connect<{}, AdminPageProps, {}>(mapStateToProps, { fetchDoseSpotStatus })(_AdminPage);