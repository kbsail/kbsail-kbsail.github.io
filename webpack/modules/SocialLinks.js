// modules/Home.js
import React from 'react'
import SocialLink from './SocialLink.js'

export default React.createClass({
  render() {
    return (
        <nav>
            <SocialLink linkType="fa-linkedin" href="http://www.linkedin.com/in/kevinberry1" title="LinkedIn"/>
            <SocialLink linkType="fa-twitter" href="http://twitter.com/lostmarinero" title="Twitter"/>
            <SocialLink linkType="fa-github" href="http://github.com/lostmarinero" title="Github"/>
            <SocialLink linkType="fa-envelope" href="mailto:berry.kevinw@gmail.com" title="Email"/>
        </nav>
    )
  }
})
