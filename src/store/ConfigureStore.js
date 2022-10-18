/* global window:true */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from 'Reducers/';
import sagasManager from 'Utils/sagasManager';

const sagaMiddleware = createSagaMiddleware();
const isProduction = process.env.NODE_ENV === 'production';
let composeEnhancers = compose;

if (!isProduction && window) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default function configureStore(initialState) {
  let finalCreateStore = composeEnhancers(applyMiddleware(sagaMiddleware))(
    createStore
  );

  const store = finalCreateStore(reducer, initialState);

  // configStorage();
  sagaMiddleware.run(sagasManager.getRootSaga());

  if (!isProduction && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/', () => {
      const nextReducer = reducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
