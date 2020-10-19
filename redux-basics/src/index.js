import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import counterReducer from './store/reducers/counter';
import persistenceReducer from './store/reducers/persistence';

const rootReducer = combineReducers ({
    counterStore: counterReducer,
    persistenceReducer: persistenceReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root'));
