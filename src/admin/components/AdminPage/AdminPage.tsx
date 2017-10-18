import * as React from 'react';
import { connect } from 'react-redux';
import { DoseSpotStatus, fetchDoseSpotStatus } from '../../';
import { GlobalState } from '../../../rootReducer';
import { List, ListItem } from 'material-ui/List';
import { IconButton } from 'material-ui/IconButton';
import SocialPerson from 'material-ui/svg-icons/social/person';
import MapsLocalPharmacy from 'material-ui/svg-icons/maps/local-pharmacy';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { Route, RouteComponentProps } from 'react-router-dom';
import { UsersContainer } from '../../../users';

import './AdminPage.css';

interface AdminPageProps extends RouteComponentProps<{}> {
    statuses: DoseSpotStatus[];
    clinicians: number[];
    fetchDoseSpotStatus: () => void;
}

interface AdminPageState {
    isDoseSpotOpen: boolean;
    selectedTab: string;
}

export class _AdminPage extends React.Component<AdminPageProps, AdminPageState> {

    _doseSpotUrl = 'http://my.staging.dosespot.com/LoginSingleSignOn.aspx?SingleSignOnClinicId=1141&SingleSignOnUserId=28486&SingleSignOnPhraseLength=32&SingleSignOnCode=1TGFEFc99Fyu0oa4ndaIRwZ9e6XMfaUgeQzzdLnHo6j9DCsONTObhdegukATyPsaLkJsicN4ZtVdLDKQ1mCnJJi0Xjs2Uf8xbSq8TNoZgMl2uvNAWbuJvw&SingleSignOnUserIdVerify=8Dgtd7byVJkRyub7tE2ThA1HSZfxapoUbAd%2FxR5gjG1ZxwVqg92YSu82Okf05mWY6APSNHILbFiRw7hwak9qiw&RefillsErrors=1';

    constructor() {
        super();

        this.state = {
            isDoseSpotOpen: false,
            selectedTab: 'users'
        };

        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleNavigate = this.handleNavigate.bind(this);
    }

    componentDidMount() {
        this.props.fetchDoseSpotStatus();
    }

    handleCloseDialog() {
        this.setState({ isDoseSpotOpen: false });
    }

    handleOpenDialog() {
        this.setState({ isDoseSpotOpen: true });
    }

    handleNavigate(subpath: string) {
        this.setState({ selectedTab: subpath}, () => {
            this.props.history.push(`${this.props.match.url}/${subpath}`)
        });
    }

    getStatusErrorsCount(): number {
        if (!this.props.statuses || this.props.statuses.length == 0) return 0;
        const status = this.props.statuses[0];
        return status.transactionErrorsCount;
    }

    getStatusErrorsUrl(): string {
        if (!this.props.statuses || this.props.statuses.length == 0) return '';
        const status = this.props.statuses[0];
        return status.url;
    }

    renderDoseSpotInfo() {
        return (
            <div>                           
                <table>
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
        )
    }

    render() {
        return(
            <div className="admin-page-wrapper">
                <aside className="admin-sidebar">
                    <List>
                        <ListItem 
                            primaryText="Users" 
                            leftIcon={<SocialPerson />} 
                            onClick={ () => this.handleNavigate('users') } 
                            style={{ 
                                backgroundColor: this.state.selectedTab == 'users' ? '#f3f3f3' : 'unset'
                            }} 
                        />
                        <ListItem 
                            primaryText="DoseSpot" 
                            className="dosespot-list-item" 
                            data-count={this.getStatusErrorsCount()} 
                            leftIcon={<MapsLocalPharmacy data-count={this.getStatusErrorsCount()} className="item-icon-alert" />} 
                            onClick={ () => this.handleNavigate('dosespot')} 
                            style={{
                                backgroundColor: this.state.selectedTab == 'dosespot' ? '#f3f3f3' : 'unset'
                            }}
                        />
                    </List>
                </aside>
                <section className="admin-content">
                    <Route path={`${this.props.match.url}/`} exact={true} component={UsersContainer} />
                    <Route path={`${this.props.match.url}/users`} exact={true} component={UsersContainer} />
                    <Route path={`${this.props.match.url}/dosespot`} exact={true} render={(props) => { return (
                        <div className="admin-dosespot-dialog-wrapper">
                            <iframe className="admin-dosespot-iframe" src={ this._doseSpotUrl } ></iframe>
                        </div>
                    )}} />
                </section>
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
                        <iframe className="admin-dosespot-iframe" src={ this.getStatusErrorsUrl() } ></iframe>
                    </div>
                </Dialog>
            </div>
        )
    }
}

{/* <div>                           
    <table>
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
</div> */}

const mapStateToProps= (state: GlobalState) => {
    return {
        statuses: state.admin.items,
        clinicians: state.admin.clinicians
    }
}

export const AdminPage = connect<{}, AdminPageProps, {}>(mapStateToProps, { fetchDoseSpotStatus })(_AdminPage);