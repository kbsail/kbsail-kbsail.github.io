import React from 'react'
import SideBar from './SideBar'
import Footer from './Footer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default React.createClass({
  getInitialState: function() {
    return {visible: false};
  },
  toggleActive() {
    var newState = this.state.visible == true ? false : true
    this.setState({visible: newState});
  },
  render() {
    let sideBarClasses = 'side-nav-container';
    let mainPageClasses = 'main-page';
    if (this.state.visible) {
      sideBarClasses  = 'side-open side-nav-container'
      mainPageClasses = 'side-open main-page'
    }
    return (
      <div>
        <SideBar sideBarClasses={sideBarClasses} />
        <div className={mainPageClasses}>
          <button className="side-bar-toggle" onClick={this.toggleActive}>Menu</button>
          {this.props.children}
          <Footer/>
        </div>
      </div>
    )
  }
});
