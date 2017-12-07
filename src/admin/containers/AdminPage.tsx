import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import AdminMainPage from '../components/AdminMainPage/AdminMainPage';
import { GlobalState } from '../../common';

interface AdminPageProps extends RouteComponentProps<{}> {
    
}

export class AdminPage extends React.Component<AdminPageProps, {}> {
    render() {
        return (
            <AdminMainPage {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState) => ({
        
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);