import React from 'react'
import {PROJECTS} from './Projects'

export default React.createClass({
  render() {
	return (
	  <div className="project-modal">
      <h5>{PROJECTS[this.props.params.id].title}</h5>
      <img src={PROJECTS[this.props.params.id].src} style={{ width: '100%', borderRadius: '3px' }} />
      <p>{PROJECTS[this.props.params.id].description}</p>
	  </div>
	)
  }
})
