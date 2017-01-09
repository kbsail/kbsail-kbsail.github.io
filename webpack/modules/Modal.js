import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div style={this.styles} className="custom-modal">
        <p><Link to={this.props.returnTo}>Back</Link></p>
        {this.props.children}
      </div>
    )
  }
})
