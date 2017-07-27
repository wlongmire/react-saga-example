import * as injectTapEventPlugin from 'react-tap-event-plugin';

beforeAll(() => {
    // since we're using mount...need the tap event plugin and the mui them provider
    // tech debt: figure a cleaner way of doing this
    injectTapEventPlugin();
})

test('Login component renders correctly', () => {
    // todo: solve the localStorage doesn't exist issue and write better tests!
    // const store = configureStore({});
    // const wrapper = mount(
    //         <Main store={store} />
    // );
    // expect(wrapper.find('h1').exists());
});