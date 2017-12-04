import './Demo1.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react'
import axios from 'axios'
import {
  fetchAllRepo,
} from '../../Actions/Index.js'

class Demo1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      infos: ''
    }
  }

  componentWillMount () {
    axios
      .get('http://localhost:3000/index')
      .then(res => {
        this.setState({ infos: res.data })
      })
  }

  render () {
    const { infos } = this.state
    const createMarkup = () => ( {__html: infos} )
    return (
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    )
  }
}

export default Demo1



