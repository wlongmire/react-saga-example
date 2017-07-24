import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { app as Application } from '../application';
import * as Zoo from '../zoo';
import * as Visit from '../visits';

export const makeMainRoutes = () => {
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
                    path="/visit" 
                    render={(props) => <Visit.Components.VisitContainer {...props} />}
                />
            </div>
        </BrowserRouter>
    );
};