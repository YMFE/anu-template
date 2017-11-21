import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import {
  App,
  Demo1,
  Demo2,
} from './Containers/Index.js'

const rootRoute = {
  path: '/',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Containers/App/App.jsx').default)
    }, 'App')
  },
  childRoutes: [
    require('./Containers/Demo1/Demo1.js'),
    require('./Containers/Demo2/Demo2.js'),
  ]
}

export default () => <Router history={browserHistory} routes={rootRoute} />
