// import * as React from 'react';
// import { MuiThemeProvider } from 'material-ui/styles';
// import { Cases } from '../Cases';
// import { mount } from 'enzyme';
// import * as injectTapEventPlugin from 'react-tap-event-plugin';

// beforeAll(() => {
//     // since we're using mount...need the tap event plugin and the mui them provider
//     // tech debt: figure a cleaner way of doing this
//     injectTapEventPlugin();
// })

// test('Cases component renders correctly', () => {
//     const wrapper = mount(
//         <MuiThemeProvider>
//             <Cases />
//         </MuiThemeProvider>
//     );
//     expect(wrapper.find('h1').exists());
// });