import React from 'react'
import {PROJECTS} from './Projects'

export default React.createClass({
  render() {
	return (
	  <div className="project-individual">
      <h1>{PROJECTS[this.props.params.id].title}</h1>
      <img src={PROJECTS[this.props.params.id].src} style={{ width: '100%', borderRadius: '3px' }} />
      <p>{PROJECTS[this.props.params.id].description}</p>
	  </div>
	)
  }
})
