import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import Routes from './Routes.js';
import todoApp from './reducer';

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {Routes(store)}
    </Router>
  </Provider>,
  document.querySelector('#app')
);
