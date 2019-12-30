import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import App from './components/App'

import trendychicApp from './reducers'
import { loadState, saveState } from './localStorage.js'

const persistedState = loadState();
const store = createStore(
  trendychicApp,
  persistedState
);

store.subscribe(() => {
  saveState({
    apps: store.getState().apps
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
