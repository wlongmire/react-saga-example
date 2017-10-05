import * as React from 'react';
import * as Redux from 'react-redux';
import { Route, Router, Redirect } from 'react-router-dom';
import * as Visits from '../visits';
import * as Auth from '../auth';
import * as Admin from '../admin';
import * as Schedule from '../schedule';
import * as AuthService from '../auth/service'
import { Navbar } from '../navigation';
import { PatientListContainer, PatientDetail } from '../patients';
import { DoseSpotUser } from '../dosespot';
import { UsersContainer, UserDetail } from '../users';
import { history } from '../common';

export const makeMainRoutes = (store: Redux.Store<{}>) => {
    return (
        <Router history={history}>
            <div>
                <Route 
                    path="/reset-password"
                    exact={true}
                    render={(props) => <Auth.ForgotPassword {...props} />}
                />
                <Route 
                    path="/update-password"
                    exact={true}
                    render={(props) => <Auth.UpdatePassword {...props} />}
                />
                <Route
                    path="/verify-code"
                    exact={true}
                    render={(props) => <Auth.MFACodeEntry {...props} />}
                />
                <Route
                    path="/"
                    render={(props) => (
                        !AuthService.isAuthenticated() ? (
                            <Redirect 
                                to={{
                                    pathname: '/login',
                                    state: { referrer: '/' }
                                    }} 
                            />
                        ) : ( <Navbar {...props} /> )
                    )}
                />
                <div className="content-body">
                    <Route 
                        exact={true}
                        path="/"
                        render={(props) => (
                            !AuthService.isAuthenticated() ? (
                                <Redirect 
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/' }
                                        }} 
                                />
                            ) : ( <PatientListContainer {...props} /> )
                        )} 
                    />
                    <Route 
                        path="/patients/:patientId"
                        exact={true}
                        render={(props) => (
                            !AuthService.isAuthenticated() ? (
                                <Redirect 
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/patients/:patientId' }
                                        }} 
                                />
                            ) : ( <PatientDetail {...props} /> )
                        )}
                    />
                    <Route 
                        path="/patients"
                        exact={true}
                        render={(props) => (
                            !AuthService.isAuthenticated() ? (
                                <Redirect 
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/patients' }
                                        }} 
                                />
                            ) : ( <PatientListContainer {...props} /> )
                        )}
                    />
                    <Route 
                        path="/dosespot"
                        exact={true}
                        render={(props) => (
                            !AuthService.isAuthenticated() ? (
                                <Redirect 
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/dosespot' }
                                        }} 
                                />
                            ) : ( <DoseSpotUser {...props} /> )
                        )}
                    />
                    <Route 
                        path="/users/:userId"
                        exact={true}
                        render={(props) => (
                            !AuthService.isAuthenticated() ? (
                                <Redirect
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/users'}
                                    }}
                                />
                            ) : ( <UserDetail {...props} /> )
                        )}
                    />
                    <Route 
                        path="/users"
                        exact={true}
                        render={(props) => (
                            !AuthService.isAuthenticated() ? (
                                <Redirect
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/users'}
                                    }}
                                />
                            ) : ( <UsersContainer {...props} /> )
                        )}
                    />
                <Route
                        path="/schedule"
                        render={(props) => (
                            !AuthService.isAuthenticated() ? (
                                <Redirect
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/schedule'}
                                    }}
                                />
                            ) : ( <Schedule.Components.Schedules {...props} /> )
                        )} />
                    <Route
                        path="/login"
                        render={(props) => <Auth.LoginContainer {...props} />}
                    />
                    <Route 
                        path="/visits" 
                        render={(props) => (
                            !AuthService.isAuthenticated() ? (
                                <Redirect
                                    to={{
                                        pathname: '/login',
                                        state:{ referrer: '/visits'}
                                    }}
                                />
                            ) : ( <Visits.Components.VisitsContainer {...props} />)
                        )}
                    />
                    <Route  
                        path="/admin"
                        render={(props) => (
                            !AuthService.isAuthenticated() ? (
                                <Redirect
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/admin'}
                                    }}
                                />
                            ) : ( <Admin.AdminPage {...props} />)
                        )}
                    />
                </div>
            </div>
        </Router>
    );
};