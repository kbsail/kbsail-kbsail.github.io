import React from 'react'
import {PROJECTS} from './Projects'

export default React.createClass({
  render() {
	return (
	  <div className="project-modal">
	    <img src={PROJECTS[this.props.params.id].src} style={{ height: '80%' }} />
	  </div>
	)
  }
})
