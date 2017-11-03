import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
  App,
  Demo1,
  Demo2,
} from './Containers/Index.js'

export default (store) => {
  return (
    <Route path="/" component={App}>
      <Route path="/Demo1" component={Demo1} />
      <Route path="/Demo2" component={Demo2} />
    </Route>
  )
}

