// modules/Navlink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <a {...this.props} target="_blank"/>;
  }
});
