import * as React from 'react';
import * as Redux from 'react-redux';
import { Route, Router, Redirect } from 'react-router-dom';
import * as Visits from '../visits';
import * as Auth from '../auth';
import * as Admin from '../admin';
import * as Schedule from '../schedule';
import { Navbar } from '../navigation';
import { PatientList } from '../patients';
import { DoseSpotUser } from '../dosespot';
import { UsersContainer, UserDetail } from '../users';
import { GlobalState } from '../rootReducer';
import { history } from '../common';
import { isAuthenticated } from '../utils/auth-util';

export const makeMainRoutes = (store: Redux.Store<{}>) => {
    const state = store.getState() as GlobalState;
    console.dir('state', state);
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
                        !isAuthenticated() ? (
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
                        path="/"
                        exact={true}
                        render={(props) => (
                            !isAuthenticated() ? (
                                <Redirect 
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/' }
                                        }} 
                                />
                            ) : ( 
                                <Redirect to={{pathname: '/patients'}} /> 
                            )
                        )} 
                    />
                    {/* <Route 
                        path="/patients/:patientId"
                        exact={true}
                        render={(props) => { 
                            console.dir(props);
                            return (
                                !AuthService.isAuthenticated() ? (
                                    <Redirect 
                                        to={{
                                            pathname: '/login',
                                            state: { referrer: '/patients/:patientId' }
                                            }} 
                                    />
                                ) : ( <PatientDetail {...props} /> )
                        )}}
                    /> */}
                    <Route 
                        path="/patients/:patientId?"
                        render={(props) => (
                            !isAuthenticated() ? (
                                <Redirect 
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/patients' }
                                        }} 
                                />
                            ) : ( <PatientList {...props} /> )
                        )}
                    />
                    <Route 
                        path="/dosespot"
                        exact={true}
                        render={(props) => (
                            !isAuthenticated() ? (
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
                            !isAuthenticated() ? (
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
                            !isAuthenticated() ? (
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
                            !isAuthenticated() ? (
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
                            !isAuthenticated() ? (
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
                            !isAuthenticated() ? (
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