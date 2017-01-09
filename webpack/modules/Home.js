// modules/Home.js
import React from 'react'
import SocialLinks from './SocialLinks.js'
import OutsideLink from './OutsideLink.js'

export default React.createClass({
  render() {
    return (
        <div className="front-page">
            <div className="front-info">
                <h1>Kevin Berry</h1>
                <SocialLinks></SocialLinks>
                <h2>Web Developer</h2>
                <h5>Specializing in Python & Ruby</h5>
                <p>Formerly of <OutsideLink href="https://codeforamerica.org" alt="Code for America">Code for America</OutsideLink> & <OutsideLink href="https://flyrlabs.com" alt="FlyrLabs">FlyrLabs</OutsideLink>.</p>
                <p>Mentorship with <OutsideLink href="https://missionbit.org" alt="MissionBit">MissionBit</OutsideLink>.</p>
            </div>
        </div>
    )
  }
})
