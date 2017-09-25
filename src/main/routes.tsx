import * as React from 'react';
import * as Redux from 'react-redux';
import { Route, Router, Redirect } from 'react-router-dom';
import * as Application from '../application';
import * as Zoo from '../zoo';
import * as Visits from '../visits';
import * as Users from '../users';
import * as Auth from '../auth';
import * as Admin from '../admin';
import * as Schedule from '../schedule';
import { PatientListContainer, PatientDetail } from '../patients';
import { AuthService } from '../services';
import { history } from '../common';

export const makeMainRoutes = (store: Redux.Store<{}>) => {
    return (
        <Router history={history}>
            <div>
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
                        ) : ( <Application.Components.App {...props} /> )
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
<<<<<<< HEAD
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
=======
                    render={(props) => <Users.Components.Patients/>}
>>>>>>> develop
                />
                <Route 
                    path="/users"
                    render={(props) => (
                        !AuthService.isAuthenticated() ? (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { referrer: '/users'}
                                }}
                            />
                        ) : ( <Admin.Components.Users {...props} /> )
                    )}
                />
                <Route 
                    path="/add-user"
                    render={(props) => (
                        !AuthService.isAuthenticated() ? (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { referrer: '/add-user'}
                                }}
                            />
                        ) : ( <Admin.Components.AddUserPage {...props} /> )
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
                />
                
                <Route 
                    path="/zoo"
                    render={(props) => <Zoo.Components.Main {...props} />}
                />
                <Route
                    path="/login"
                    render={(props) => <Auth.Components.LoginContainer {...props} />}
                />
                <Route 
                    path="/visits" 
                    render={(props) => (
                        !AuthService.isAuthenticated() ? (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state:{ referrer: '/'}
                                }}
                            />
                        ) : ( <Visits.Components.VisitsContainer {...props} />)
                    )}
                />
            </div>
        </Router>
    );
};