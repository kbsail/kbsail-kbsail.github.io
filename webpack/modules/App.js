import React from 'react'
import { Link } from 'react-router'
import SideBar from './SideBar'
import Profile from './Profile'
import Footer from './Footer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NotFound from './NotFound';

export default React.createClass({
  getInitialState: function() {
    return {visible: false};
  },
  toggleActive() {
    this.setState({visible: !this.state.visible});
  },
  render() {
    if (this.props.children == null) {
      return <NotFound />;
    }
    let sideBarClasses = 'side-nav-container';
    let mainPageClasses = 'main-page';
    let slidingContainerClasses = "sliding-container";
    if (this.state.visible) {
      sideBarClasses  = 'side-open side-nav-container'
      mainPageClasses = 'side-open main-page'
      slidingContainerClasses = "side-open sliding-container";
    }
    let headerContent = (
      <div className="header-container">
        <SideBar />
      </div>
    )
    if (!window.matchMedia('(min-width: 600px)').matches) {
      headerContent = (
        <div className={slidingContainerClasses}>
          <div className="header-container">
            <Link className="side-bar-toggle-button" style={{color: "black"}} onClick={this.toggleActive} href="#">
              <i className="fa fa-2x fa-bars" aria-hidden="true"></i>
            </Link>
          </div>
          <SideBar sideBarClasses={sideBarClasses} />
        </div>
      )
    }
    return (
      <div className="react-container">
        {headerContent}
        <Profile/>
        <div className={mainPageClasses}>
          {this.props.children}
          <Footer/>
        </div>
      </div>
    )
  }
});
