import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { AppContainer } from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { listReducer } from "./reducers/listReducer";

// @ts-ignore
// const store = createStore(listReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// @ts-ignore
const store = createStore(listReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));

render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
