'use strict'

import React, { Component } from 'react'

const loadAsync = (promise) => {
  class Async extends Component {
    constructor () {
      super()
      this.state = {
        loaded: false,
        Component: null
      }
    }

    async componentDidMount () {
      const comp = await promise
      this.setState({
        loaded: true,
        Component: comp.default
      })
    }

    render () {
      return this.state.loaded
        ? <this.state.Component {...this.props} />
        : <div children={this.props.children} />
    }
  }

  return Async
}

export default loadAsync
