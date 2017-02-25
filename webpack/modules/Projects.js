import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'


export const PROJECTS = [
  { id: 0, src: 'http://placekitten.com/601/601' },
  { id: 1, src: 'http://placekitten.com/610/610' },
  { id: 2, src: 'http://placekitten.com/620/620' },
  { id: 3, src: 'http://placekitten.com/620/620' },
  { id: 4, src: 'http://placekitten.com/620/620' },
  { id: 5, src: 'http://placekitten.com/620/620' }
]

export default React.createClass({
  render() {
    return (
      <div>
        <div className="projects-row">
          {PROJECTS.map(project => (
            <Link
              key={project.id}
              to={{
                pathname: `/projects/${project.id}`,
                state: { modal: true, returnTo: this.props.location.pathname }
              }}
            >
              <img className="responsive-image" style={{ margin: 10, borderRadius: '3px' }} src={project.src} height="250" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
})
