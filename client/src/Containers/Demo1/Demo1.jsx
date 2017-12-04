import './Demo1.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react'
import axios from 'axios'
import {
  fetchAllRepo,
} from '../../Actions/Index.js'

@connect(
  state => ({
    publicList: state.publicList,
  }),
  {
    fetchAllRepo
  }
)

class Demo1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      infos: ''
    }
  }

  componentWillMount () {
    this.props.fetchAllRepo()
    console.log('mou', this.props.publicList)
    axios
      .get('http://localhost:3000/index')
      .then(res => {
        this.setState({ infos: res.data })
      })
  }

  render () {
    const { infos } = this.state
    const { publicList } = this.props
    const createMarkup = () => ( {__html: infos} )

    return (
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    )
  }
}

export default Demo1



