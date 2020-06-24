import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


import App from './components/App'

import trendychicApp from './reducers'
import { loadState, saveState } from './localStorage.js'
import throttle from 'lodash/throttle'

const stripePromise = loadStripe("pk_test_51GuPZeD31gLM6mOREEIkNOJxkYuqPqnd6pYprQUnofThPTuXOsvzsBQXc8TinxiBnaooboo5S3dvXZudnwADCqSA004oI1T2nx");


const persistedState = loadState();
const store = createStore(
  trendychicApp,
  persistedState
);

store.subscribe(throttle(() => {
  saveState({
    apps: store.getState().apps
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>,
  document.getElementById('root'));
