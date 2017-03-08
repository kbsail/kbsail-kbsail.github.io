import React from 'react'
import Modal from './Modal.js'

export default React.createClass({
  render() {
    let { location } = this.props

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})