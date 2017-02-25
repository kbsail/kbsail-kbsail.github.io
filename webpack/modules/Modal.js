import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  styles: {
    borderRadius: '5px',
    position: 'fixed',
    top: '85px',
    right: '10%',
    bottom: '10%',
    left: '10%',
    padding: 20,
    boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
    overflow: 'auto',
    background: '#fff'
  },
  render() {
    return (
      <div style={this.styles}>
        <p><Link to={this.props.returnTo}>Back</Link></p>
        {this.props.children}
      </div>
    )
  }
})
