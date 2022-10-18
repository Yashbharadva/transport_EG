import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';
import configureStore from './store/ConfigureStore';
// import * as serviceWorker from './serviceWorker';

const isProd = process.env.NODE_ENV === 'production';

const store = configureStore();

import 'Sagas/';

const renderRoot = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={history} context={{}}>
        <Routes />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};

renderRoot();

if (!isProd && module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./Routes', () => {
    renderRoot();
  });
}

if('Notification' in window) {
  if(window.Notification.permission !== 'granted') {
    window.Notification.requestPermission().then(result => {
      console.log(result);
    })
  }
}

// serviceWorker.register();
