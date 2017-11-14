import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import AdminMainPage from '../components/AdminMainPage/AdminMainPage';
import admin from '../../admin';
import { DoseSpotStatus, GlobalState } from '../../common';

interface AdminPageProps extends RouteComponentProps<{}> {
    statuses: DoseSpotStatus[];
    clinicians: number[];
    fetchDoseSpotStatus: () => void;
}

export class AdminPage extends React.Component<AdminPageProps, {}> {
    render() {
        const { fetchDoseSpotStatus, clinicians, statuses, location, history } = this.props;

        return (
            <AdminMainPage  
                fetchDoseSpotStatus={fetchDoseSpotStatus}
                clinicians={clinicians}
                statuses={statuses}
                location={location}
                history={history}
            />
        );
    }
}

const mapStateToProps = (state: GlobalState) => ({
        statuses: state.dosespot.items,
        clinicians: state.dosespot.clinicians
});

const mapDispatchToProps = {
    fetchDoseSpotStatus: admin.actions.fetchDoseSpotStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);