import * as React from 'react';
import * as Redux from 'react-redux';
import { Route, Router, Redirect } from 'react-router-dom';
import * as Auth from './auth';
import * as Admin from './admin';
import * as Schedule from './schedule';
import { Navbar } from './navigation';
import { PatientList } from './patients';
import { DoseSpotUser } from './dosespot';
import { UsersContainer, UserDetail } from './users';
import { history } from './common';
import { isAuthenticated } from './auth/util';

export const makeMainRoutes = (store: Redux.Store<{}>) => {
    return (
        <Router history={history}>
            <div>
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
                {<div className="content-body">
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
                    <Route 
                        path="/patients"
                        render={(props) => (
                            !isAuthenticated() ? (
                                <Redirect 
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/patients' }
                                        }} 
                                />
                            ) : ( 
                                    <PatientList {...props} /> 
                                )
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
                        path="/user-add"
                        exact={true}
                        render={(props) => (
                            !isAuthenticated() ? (
                                <Redirect
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/user-detail'}
                                    }}
                                />
                            ) : ( <UserDetail {...props} /> )
                        )}
                    />
                    <Route 
                        path="/user-detail/:userId"
                        exact={true}
                        render={(props) => (
                            !isAuthenticated() ? (
                                <Redirect
                                    to={{
                                        pathname: '/login',
                                        state: { referrer: '/user-detail'}
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
                        )} 
                    />
                    <Route
                        path="/login"
                        render={(props) => <Auth.LoginContainer {...props} />}
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
                    <Route
                        path="/verify-code"
                        exact={true}
                        render={(props) => <Auth.MFACodeEntry {...props} />}
                    />
                </div>}
            </div>
        </Router>
    );
};