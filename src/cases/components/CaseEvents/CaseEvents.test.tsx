// import * as React from 'react';
// import { MuiThemeProvider } from 'material-ui/styles';
// import { CaseEvents } from '../CaseEvents';
// import { CaseItem } from '../../model';
// import { mount } from 'enzyme';
// import * as injectTapEventPlugin from 'react-tap-event-plugin';

// beforeAll(() => {
//     // since we're using mount...need the tap event plugin and the mui them provider
//     // tech debt: figure a cleaner way of doing this
//     injectTapEventPlugin();
// })

// test('CaseEvents component renders correctly', () => {
//     const caseEvents: Array<CaseItem> = [];
//     const wrapper = mount(
//         <MuiThemeProvider>
//             <CaseEvents caseEvents={caseEvents} />
//         </MuiThemeProvider>
//     );
//     expect(wrapper.find('.case-events').exists());
// });