import * as React from 'react';
import * as Redux from 'react-redux';
import { Route, Router, Redirect } from 'react-router-dom';
// import * as Application from '../application';
import * as Zoo from '../zoo';
// import * as Visits from '../visits';
import * as Users from '../users';
import * as Visits from '../visits';
// import * as Users from '../users';
import * as Auth from '../auth';
import * as Admin from '../admin';
import * as Schedule from '../schedule';
import { Navbar } from '../navigation';
import { PatientListContainer, PatientDetail } from '../patients';
import { AuthService } from '../services';
import { DoseSpotUser } from '../dosespot';
import { UsersContainer, UserDetail } from '../users';
import { history } from '../common';

export const makeMainRoutes = (store: Redux.Store<{}>) => {
    return (
        <Router history={history}>
            <div>
                <Navbar />
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
                    path="/users/add"
                    exact={true}
                    render={(props) => (
                        !AuthService.isAuthenticated() ? (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { referrer: '/users/add'}
                                }}
                            />
                        ) : ( <Admin.AddUserPage {...props} /> )
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
                {/* <Route 
                    exact={true}
                    path="/patient/:patientId"
                    render={(props) => (
                        !AuthService.isAuthenticated() ? (
                            <Redirect 
                                to={{
                                    pathname: '/login',
                                    state: { referrer: '/patient/:patientId' }
                                    }} 
                            />
                        ) : ( <Users.Components.Patient {...props} /> )
                    )}
                /> */}
                
                <Route 
                    path="/zoo"
                    render={(props) => <Zoo.Components.Main {...props} />}
                />
                <Route
                    path="/login"
                    render={(props) => <Auth.LoginContainer {...props} />}
                />
                {/* <Route 
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
                /> */}

                <Route 
                    path="/reset-password"
                    render={(props) => <Auth.Components.EmailResetForm />}
                />
                <Route 
                    path="/update-password"
                    render={(props) => <Auth.Components.UpdatePasswordForm />}
                />

                <Route 
                    path="/reset-password"
                    render={(props) => <Auth.Components.EmailResetForm />}
                />
                <Route 
                    path="/update-password"
                    render={(props) => <Auth.Components.UpdatePasswordForm />}
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
        </Router>
    );
};