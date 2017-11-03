import './App.scss';
import React, { Component, PropTypes } from 'react';
import { IndexRoute, Route, Link } from 'react-router';

class App extends Component {
  render () {
    return (
      <div className="box">
        <ul>
          <li><Link to="/Demo1">Demo1</Link></li>
          <li><Link to="/Demo2">Demo2</Link></li>
        </ul>
        <section class="box-content">{this.props.children}</section>
      </div>
    )
  }
}

export default App;