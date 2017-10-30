import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { Navbar } from '../../../navigation';
import { GlobalState } from '../../../common';

interface AuthorizedRouteProps extends RouteProps {
    pending: boolean;
    logged: boolean;
    component: React.ComponentType<any>;
}

class AuthorizedRoute extends React.Component<AuthorizedRouteProps> {
    render() {
        const { component, pending, logged, ...rest } = this.props;
        const Component = component;
        console.log('auth props', this.props);
        return (
            <Route {...rest} render={props => {
                if (pending) return <Redirect to="/auth/verify-code" />
                return logged
                    ? <div><Navbar /><Component {...rest} /></div>
                    : <Redirect to="/auth/login" />
                }}
            />
        );
    }
}

const mapStateToProps = (state: GlobalState, ownProps: RouteProps) => {
    return {
        pending: state.auth.pending,
        logged: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps, {})(AuthorizedRoute);