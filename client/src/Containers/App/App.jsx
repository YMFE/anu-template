import './App.scss';
import React, { Component } from 'react'
import { IndexRoute, Route, Link } from 'react-router';

class App extends Component {
  render () {
    const { children } = this.props
    const content = children ? children : <h1>欢迎使用 Qreact!</h1>
    return (
      <div className="box">
        <ul>
          <li><Link to="/Demo1">Demo1</Link></li>
          <li><Link to="/Demo2">Demo2</Link></li>
        </ul>
        <section class="box-content">{content}</section>
      </div>
    )
  }
}

export default App;

