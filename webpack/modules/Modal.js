import React from 'react'
import { Link } from 'react-router'

function Modal() {
  return (
    <div style={this.styles} className="custom-modal">
      <p><Link to={this.props.returnTo}>Back</Link></p>
      {this.props.children}
    </div>
  )
}

export default Modal;