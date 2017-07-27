import * as React from 'react';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import { makeMainRoutes } from '../routes';

interface MainProps {
    store: Redux.Store<{}>;
}

interface MainState {
    routes: JSX.Element;
}

export class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);

        this.state = {
            routes: makeMainRoutes(this.props.store)
        };
    }

    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    {this.state.routes}
                </MuiThemeProvider>
            </Provider>
        );
    }
}
