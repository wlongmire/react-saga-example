import * as React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { Login } from '../Login';
import { mount } from 'enzyme';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
// import { AuthLoginCredentials } from '../../../services/auth';
// import { ActionResult } from '../../../common';

const setup = () => {
    const props = {
        login: jest.fn()
    }

    const wrapper = mount(
        <MuiThemeProvider>
            <Login {...props} />
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
            expect(wrapper.find('.login-form').exists());
            expect(wrapper.find('.login-email-input').exists()).toBeTruthy();
            expect(wrapper.find('.login-password-input').exists()).toBeTruthy();
        
            const loginButton = wrapper.find('.login-submit-button');
            expect(loginButton.exists()).toBeTruthy();
            expect(loginButton.childAt(0).prop('disabled')).toBeTruthy();
        });
    });
});