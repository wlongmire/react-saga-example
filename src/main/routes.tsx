import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { app as Application } from '../application';
import { zoo as Zoo } from '../zoo';

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
                    render={(props) => <Zoo.Components.Zoo {...props} />}
                />
            </div>
        </BrowserRouter>
    );
};