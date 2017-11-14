import * as React from 'react';
import { Route, Router, Redirect, Switch, RouteComponentProps, RouteProps } from 'react-router-dom';
import Login from './auth/containers/Login';
import MFACodeEntry from './auth/containers/MFACodeEntry';
import { AdminPage } from './admin/containers/AdminPage';
import { Schedules } from './schedule';
import { AuthorizedRoute } from './main';
import Navbar from './navigation/containers/Navbar';
import PatientList from './patients/containers/PatientList';
import PatientDetail from './patients/containers/PatientDetail';
import DoseSpotUser from './dosespot/containers/DoseSpotUser';
import UserDetail from './users/conteiners/UserDetail';
import UsersContainer from './users/conteiners/UsersContainer';
import { history } from './common';

const UnauthorizedLayout = (props: RouteComponentProps<any>) => {
    return (
        <div>
            <Switch>
                <Route 
                    path={`${props.match.path}/login`}
                    render={(renderProps) => <Login {...renderProps} />}
                />
                {
                <Route
                    path={`${props.match.path}/verify-code`}
                    render={(renderProps) => <MFACodeEntry {...renderProps} />}
                />}
                <Redirect to={`${props.match.path}/login`} />
            </Switch>
        </div>
    );
};

const PrimaryLayout = (props: RouteProps) => {
    return (
        <div className="app">
            <header>
                <Navbar />
            </header>
            <main>
                <Switch>
                    <Route path={`${props.path}/patients`} exact={true} component={PatientList} />
                    <Route
                        exact={true}
                        path={`${props.path}/patient-detail/:patientId`}
                        render={(renderProps) => <PatientDetail {...renderProps} />}
                    />
                    <Route path={`${props.path}/patients/biodrive`} exact={true} component={PatientList} />
                    <Route path={`${props.path}/dosespot`} component={DoseSpotUser} />
                    <Route path={`${props.path}/user-add`} component={UserDetail} />
                    <Route path={`${props.path}/user-detail`} component={UserDetail} />
                    <Route path={`${props.path}/users`} component={UsersContainer} />
                    <Route path={`${props.path}/admin`} component={AdminPage} />
                    <Route path={`${props.path}/schedule`} component={Schedules} />
                    <Redirect to={`${props.path}/patients`} />
                </Switch>
            </main>
        </div>
    );
};

export const makeMainRoutes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/auth" component={UnauthorizedLayout} />
                <AuthorizedRoute path="/app" component={PrimaryLayout} />
                <Redirect to="/app" />
            </Switch>
        </Router>
    );
};