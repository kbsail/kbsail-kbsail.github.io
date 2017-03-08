// module/About.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    var linkedInUrl = 'https://www.linkedin.com/in/kevinberry1/',
      resumeUrl = 'https://drive.google.com/file/d/0B1NiEZqYOerQb2Jjb1o1ZzlxUFU/view?usp=sharing';
    return (
      <div className="flex-container mini-profile">
        <div className="front-photo">
          <img src="../profile-photo.jpg" className="profile-photo responsive-image" alt="Profile Photo" />
        </div>
        <div className="front-title">
          <h5 className="name-title">Kevin Berry</h5>
          <h5><Link href={linkedInUrl} target="_blank">LinkedIn</Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link href={resumeUrl} target="_blank">Resume</Link></h5>
        </div>
        <div className="front-about">
          <div>
            <p>Web developer passionate about user centered design.</p>
            <p>Specializing in Ruby, Python and React.</p>
          </div>
        </div>
      </div>
    )  
  }
})

