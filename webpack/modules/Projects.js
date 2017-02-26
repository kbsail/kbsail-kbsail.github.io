import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'


export const PROJECTS = [
  { id: 0, title: 'Project #1', description: 'Placeholder kittens', src: 'http://placekitten.com/601/601' },
  { id: 1, title: 'Project #2', description: 'Placeholder kittens', src: 'http://placekitten.com/610/610' },
  { id: 2, title: 'Project #3', description: 'Placeholder kittens', src: 'http://placekitten.com/620/620' },
  { id: 3, title: 'Project #4', description: 'Placeholder kittens', src: 'http://placekitten.com/620/620' },
  { id: 4, title: 'Project #5', description: 'Placeholder kittens', src: 'http://placekitten.com/620/620' },
  { id: 5, title: 'Project #6', description: 'Placeholder kittens', src: 'http://placekitten.com/620/620' }
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
              <h5>{project.title}</h5>
              <img className="responsive-image" style={{ margin: '0 10px', borderRadius: '3px' }} src={project.src} height="250" />
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    )
  }
})
