import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./store/reducers";

const logger = ({ getState }) => next => action => {
    console.log("Dispatching action:", action);
    next(action);
};


const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById("root"));
