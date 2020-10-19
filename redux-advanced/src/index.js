import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import counterReducer from './store/reducers/counter';

const rootReducer = combineReducers ({
    counterStore: counterReducer
});

const logger = store => {
  return next => {
      return action => {
          console.log('[Middleware] Dispatching', action);
          console.log('[Middleware] Prev state', store.getState());
          const result = next(action);
          console.log('[Middleware] Next state', store.getState());

          return result;
      }
  }
};

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root'));
