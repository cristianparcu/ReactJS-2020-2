import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import authenticationReducer from "./store/reducers/authentication";
import postsReducer from "./store/reducers/posts";
import errorReducer from "./store/reducers/error";

const rootReducer = combineReducers({
	authenticationStore: authenticationReducer,
	postsStore: postsReducer,
	errorStore: errorReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
