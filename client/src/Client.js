import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory, Route } from 'react-router'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import Routes from './Routes.js';
import todoApp from './reducer/index.js';
import promiseMiddleware from 'redux-promise'

let store = createStore(todoApp, applyMiddleware(promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
    {Routes(store)}
  </Provider>,
  document.querySelector('#app')
);
