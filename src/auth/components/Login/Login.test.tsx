import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Login } from '../Login';
import { mount } from 'enzyme';
import * as injectTapEventPlugin from 'react-tap-event-plugin';


const setup = () => {
    const props = {
        login: jest.fn(),
        auth: {
            isAuthenticated: false,
            clientToken: undefined,
            userRole: undefined,
            userChannel: undefined,
            authError: undefined
        }
    }

    const wrapper = mount(
        <MuiThemeProvider>
            <Router>
            <Login {...props} />
            </Router>
        </MuiThemeProvider>
    );

    return {
        props,
        wrapper
    };
};

describe('components', () => {
    beforeAll(() => {
        // since we're using mount...need the tap event plugin and the mui theme provider
        // tech debt: figure a cleaner way of doing this
        injectTapEventPlugin();
    });

    describe('Login', () => {
        it('renders correctly', () => {
            const { wrapper } = setup();
            expect(wrapper.find('.login-body').exists());
            expect(wrapper.find('.login-email-input').exists()).toBeTruthy();
            expect(wrapper.find('.login-password-input').exists()).toBeTruthy();
        
            const loginButton = wrapper.find('.login-submit-button');
            expect(loginButton.exists()).toBeTruthy()
            expect(loginButton.prop('disabled')).toBeTruthy();
        });
    });
});