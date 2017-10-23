// import * as React from 'react';
// import { MuiThemeProvider } from 'material-ui/styles';
// import { Case } from '../Case';
// import { mount } from 'enzyme';
// import * as injectTapEventPlugin from 'react-tap-event-plugin';

// beforeAll(() => {
//     // since we're using mount...need the tap event plugin and the mui them provider
//     // tech debt: figure a cleaner way of doing this
//     injectTapEventPlugin();
// })

// test('Case component renders correctly', () => {
//     const wrapper = mount(
//         <MuiThemeProvider>
//             <Case />
//         </MuiThemeProvider>
//     );
//     expect(wrapper.find('h1').exists());
// });