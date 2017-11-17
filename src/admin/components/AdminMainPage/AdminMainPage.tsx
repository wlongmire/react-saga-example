import * as React from 'react';
import { Route } from 'react-router-dom';
import { History } from 'history';

import { DoseSpotStatus } from '../../../common';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import UsersContainer from '../../../users/containers/UsersContainer';

import './AdminMainPage.css';

interface AdminPageProps {
    statuses: DoseSpotStatus[];
    clinicians: number[];
    fetchDoseSpotStatus: () => void;
    location: any;
    history: History;
}

interface AdminPageState {
    isDoseSpotOpen: boolean;
    selectedTab: string;
}

export class AdminMainPage extends React.Component<AdminPageProps, AdminPageState> {
    // TODO remove hardcode
    _doseSpotUrl = 'http://my.staging.dosespot.com/LoginSingleSignOn.aspx' +
        '?SingleSignOnClinicId=1141&SingleSignOnUserId=28486&SingleSignOnPhraseLength=32' +
        '&SingleSignOnCode=1TGFEFc99Fyu0oa4ndaIRwZ9e6XMfaUgeQzzdLnHo6j9DCsONTObhdegukATyPsaLkJsicN4ZtVd' +
        'LDKQ1mCnJJi0Xjs2Uf8xbSq8TNoZgMl2uvNAWbuJvw&SingleSignOnUserIdVerify=8Dgtd7byVJkRyub7tE2ThA1HSZ' +
        'fxapoUbAd%2FxR5gjG1ZxwVqg92YSu82Okf05mWY6APSNHILbFiRw7hwak9qiw&RefillsErrors=1';

    state = {
        isDoseSpotOpen: false,
        selectedTab: 'users'
    };

    componentDidMount() {
        if (this.props.fetchDoseSpotStatus) {
            this.props.fetchDoseSpotStatus();
        }
    }

    handleCloseDialog = () => {
        this.setState({ isDoseSpotOpen: false });
    }

    handleOpenDialog = () => {
        this.setState({ isDoseSpotOpen: true });
    }

    handleNavigate = (subpath: string) => {
        this.setState({ selectedTab: subpath}, () => {
            this.props.history.push(`${this.props.location.pathname}/${subpath}`);
        });
    }

    getStatusErrorsCount(): number {
        if (!this.props.statuses || this.props.statuses.length === 0) {
            return 0;
        }
        const status = this.props.statuses[0];
        return status.transactionErrorsCount;
    }

    getStatusErrorsUrl(): string {
        if (!this.props.statuses || this.props.statuses.length === 0) {
            return '';
        }
        const status = this.props.statuses[0];
        return status.url;
    }

    render() {
        return(
            <div className="admin-page-wrapper">
                <section className="admin-content">
                    <Route path={`${this.props.location.pathname}/`} exact={true} component={UsersContainer} />
                    <Route path={`${this.props.location.pathname}/users`} exact={true} component={UsersContainer} />
                    <Route 
                        path={`${this.props.location.pathname}/dosespot`} 
                        exact={true} 
                        render={(props) => { 
                            return (
                                <div className="admin-dosespot-dialog-wrapper">
                                    <iframe className="admin-dosespot-iframe" src={this._doseSpotUrl} />
                                </div>
                            );
                        }} 
                    />
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
                            onClick={this.handleCloseDialog} 
                        />
                    ]}
                    open={this.state.isDoseSpotOpen}
                    onRequestClose={this.handleCloseDialog}
                    autoScrollBodyContent={true}
                >
                    <div className="admin-dosespot-dialog-wrapper">
                        <iframe className="admin-dosespot-iframe" src={this.getStatusErrorsUrl()} />
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default AdminMainPage;