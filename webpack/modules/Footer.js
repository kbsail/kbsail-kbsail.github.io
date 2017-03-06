import React from 'react'
import { Link } from 'react-router'
import OutsideLink from './OutsideLink'

function Footer() {
  return (
    <div className="footer">
      <br/>
      <div className="reach-out">
        <div id="hello" className="alinks">
          <p>Currently accepting proposals for freelance projects. To inquire, email <Link href="mailto:berry.kevinw@gmail.com">berry.kevinw@gmail.com</Link> or tweet <OutsideLink href="http://www.twitter.com/lostmarinero" alt="lostmarinero twitter">@lostmarinero</OutsideLink>.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;