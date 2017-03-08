// modules/routes.js
import React from 'react'
import { Route, IndexRoute, NoMatch } from 'react-router'
import App from './App'
import About from './About'
import Projects from './Projects'
import ProjectsContainer from './ProjectsContainer'
import Project from './Project'
import Home from './Home'
import NotFound from './NotFound'

function routes () {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/projects" component={ProjectsContainer}>
        <IndexRoute component={Projects}/>
        <Route path="/projects/:id" component={Project}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Route>
  )
}

export default routes;
