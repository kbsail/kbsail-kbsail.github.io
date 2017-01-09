// modules/SocialLink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    var linkType = this.props.linkType;
    return (
      <Link {...this.props} target="_blank">
        <i className={`fa fa-2x ${linkType}`} aria-hidden="true"/>
      </Link>
    )
  }
})
