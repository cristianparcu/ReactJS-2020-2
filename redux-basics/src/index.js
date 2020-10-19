import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import counterReducer from './store/reducers/counter';
import reducer from './store/reducers/persist';

const rootReducer = combineReducers ({
    counterStore: counterReducer,
    persistStore: reducer
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root'));
