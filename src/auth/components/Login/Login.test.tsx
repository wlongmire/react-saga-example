import * as React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { Login } from '../Login';
import { mount } from 'enzyme';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

beforeAll(() => {
    // since we're using mount...need the tap event plugin and the mui them provider
    // tech debt: figure a cleaner way of doing this
    injectTapEventPlugin();
})

test('Login component renders correctly', () => {
    const submitFn = () => {};
    const wrapper = mount(
        <MuiThemeProvider>
            <Login onSubmit={submitFn} />
        </MuiThemeProvider>
    );
    expect(wrapper.find('.login-form').exists());
});

test('Submit click fires fn', () => {
    const submitFn = () => {};
    const wrapper = mount(
        <MuiThemeProvider>
            <Login onSubmit={submitFn} />
        </MuiThemeProvider>
    );

    const emailInput = wrapper.find('.login-email-input');
    expect(emailInput.exists()).toBeTruthy();

    const passwordInput = wrapper.find('.login-password-input');
    expect(passwordInput.exists()).toBeTruthy();

    const loginButton = wrapper.find('.login-submit-button');
    expect(loginButton.exists()).toBeTruthy();
    expect(loginButton.childAt(0).prop('disabled')).toBeTruthy();

    console.log(emailInput.childAt(0).text());

});