import React from 'react';
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div className="side-nav-container">
        <ul role="nav" className="side-nav-list">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </div>
    );
  }
});
