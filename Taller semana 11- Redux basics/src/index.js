import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';


import saveReducer from './store/reducers/persists';
import counterReducer from './store/reducers/counter';

const rootReducer = combineReducers ({
    counterStore: counterReducer,
    persistStore: saveReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root'));
