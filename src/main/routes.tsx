import * as React from 'react';
import * as Redux from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import * as Application from '../application';
import * as Zoo from '../zoo';
import * as Login from '../login';
import * as Visits from '../visits';

export const makeMainRoutes = (store: Redux.Store<{}>) => {
    return (
        <BrowserRouter>
            <div>
                <Route 
                    exact={true}
                    path="/"    
                    render={(props) => <Application.Components.App {...props} />} 
                />
                <Route 
                    path="/zoo" 
                    render={(props) => <Zoo.Components.Main {...props} />}
                />
                <Route
                    path="/login"
                    render={(props) => <Login.Components.Login {...props} />}
                />
                <Route 
                    path="/visits" 
                    render={(props) => <Visits.Components.VisitsContainer {...props} />}
                />
            </div>
        </BrowserRouter>
    );
};