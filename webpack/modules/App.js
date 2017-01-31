import React from 'react'
import SideBar from './SideBar'
import Footer from './Footer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default React.createClass({
  getInitialState: function() {
    return {visible: false};
  },
  toggleActive() {
    this.setState({visible: !this.state.visible});
  },
  render() {
    let sideBarClasses = 'side-nav-container';
    let mainPageClasses = 'main-page';
    if (this.state.visible) {
      sideBarClasses  = 'side-open side-nav-container'
      mainPageClasses = 'side-open main-page'
    }
    return (
      <div className="react-container">
        <SideBar sideBarClasses={sideBarClasses} />
        <div className={mainPageClasses}>
          <div className="header-container">
            <button className="side-bar-toggle-button" onClick={this.toggleActive}>Menu</button>
          </div>
          {this.props.children}
          <Footer/>
        </div>
      </div>
    )
  }
});
