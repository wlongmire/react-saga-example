import * as React from 'react';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import { makeMainRoutes } from '../routes';

const routes = makeMainRoutes();

interface MainProps {
    store: Redux.Store<{}>;
}

class Main extends React.Component<MainProps, {}> {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    {routes}
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default Main;
