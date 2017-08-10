import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Main } from './main';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

import * as injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore({});

ReactDOM.render(
  <Main store={store} />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();