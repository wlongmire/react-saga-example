import * as React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { Login } from '../Login';
import { mount } from 'enzyme';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { LoginCredentials } from '../../../services/auth';
import { ActionResult } from '../../../common';

beforeAll(() => {
    // since we're using mount...need the tap event plugin and the mui them provider
    // tech debt: figure a cleaner way of doing this
    injectTapEventPlugin();
})

test('Login component renders correctly', () => {
    const loginFn = (credentials: LoginCredentials) => new ActionResult<LoginCredentials>(); ;
    const wrapper = mount(
        <MuiThemeProvider>
            <Login login={loginFn} />
        </MuiThemeProvider>
    );
    expect(wrapper.find('.login-form').exists());
});

test('Submit click fires fn', () => {
    const loginFn = (credentials: LoginCredentials) => new ActionResult<LoginCredentials>(); ;
    const wrapper = mount(
        <MuiThemeProvider>
            <Login login={loginFn} />
        </MuiThemeProvider>
    );

    const emailInput = wrapper.find('.login-email-input');
    expect(emailInput.exists()).toBeTruthy();

    const passwordInput = wrapper.find('.login-password-input');
    expect(passwordInput.exists()).toBeTruthy();

    const loginButton = wrapper.find('.login-submit-button');
    expect(loginButton.exists()).toBeTruthy();
    expect(loginButton.childAt(0).prop('disabled')).toBeTruthy();
});