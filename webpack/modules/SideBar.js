import React from 'react';
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div className={this.props.sideBarClasses}>
        <ul role="nav" className="side-nav-list">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </div>
    );
  }
});
