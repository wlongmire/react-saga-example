import * as React from 'react';
import { Route, Router, Redirect, Switch, RouteComponentProps, RouteProps } from 'react-router-dom';
import * as Auth from './auth';
import { AdminPage } from './admin';
import { Schedules } from './schedule';
import { AuthorizedRoute } from './main';
import { Navbar } from './navigation';
import { PatientList } from './patients';
import { PatientDetail } from './patients';
import { DoseSpotUser } from './dosespot';
import { UsersContainer, UserDetail } from './users';
import { history } from './common';

const UnauthorizedLayout = (props: RouteComponentProps<any>) => {
    return (
        <div>
            <Switch>
                <Route 
                    path={`${props.match.path}/login`}
                    render={(props) => <Auth.LoginContainer {...props} />}
                />
                <Route
                    path={`${props.match.path}/verify-code`}
                    render={(props) => <Auth.MFACodeEntry {...props} />}
                />
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
                    <Route path={`${props.path}/patients`} exact component={PatientList} />
                    <Route 
                        exact
                        path={`${props.path}/patient-detail/:patientId`} 
                        render={(props) => <PatientDetail {...props} />}
                    />
                    <Route path={`${props.path}/patients/biodrive`} exact component={PatientList} />
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