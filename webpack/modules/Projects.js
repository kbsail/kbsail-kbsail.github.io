import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'


const PROJECTS = [
  { id: 0, src: 'http://placekitten.com/601/601' },
  { id: 1, src: 'http://placekitten.com/610/610' },
  { id: 2, src: 'http://placekitten.com/620/620' }
]

export default React.createClass({
  render() {
    return (
      <div>
        <p>
          The url `/projects/:id` can be rendered anywhere in the app as a modal.
          Simply put `modal: true` in the location descriptor of the `to` prop.
        </p>

        <p>
          Click on an item and see its rendered as a modal, then copy/paste the
          url into a different browser window (with a different session, like
          Chrome -> Firefox), and see that the image does not render inside the
          overlay. One URL, two session dependent screens :D
        </p>

        <div>
          {PROJECTS.map(project => (
            <Link
              key={project.id}
              to={{
                pathname: `/projects/${project.id}`,
                state: { modal: true, returnTo: this.props.location.pathname }
              }}
            >
              <img style={{ margin: 10 }} src={project.src} height="100" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
})
