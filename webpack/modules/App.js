import React from 'react'
import SideBar from './SideBar'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div>
        <SideBar/>
        <div className="main-page">
          <button >
          {this.props.children}
          <Footer/>
        </div>
      </div>
    )
  }
})
