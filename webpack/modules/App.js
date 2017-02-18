import React from 'react'
import { Link } from 'react-router'
import SideBar from './SideBar'
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
    return (
      <div className="react-container">
        <div className={slidingContainerClasses}>
          <div className="header-container">
            <Link className="side-bar-toggle-button" style={{color: "black"}} onClick={this.toggleActive} href="#">
              <i className="fa fa-2x fa-bars" aria-hidden="true"></i>
            </Link>
          </div>
          <SideBar sideBarClasses={sideBarClasses} />
        </div>
        <div className={mainPageClasses}>
          {this.props.children}
          <Footer/>
        </div>
      </div>
    )
  }
});
