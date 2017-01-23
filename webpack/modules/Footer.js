import React from 'react'
import OutsideLink from './OutsideLink'

function Footer() {
  return (
    <div>
      <br/>
      <div className="reach-out">
        <div className="alinks">
          <p>Currently accepting proposals for freelance projects for Q1, 2017. To inquire, please reach out at <span className="bold-heavy">berry.kevinw</span> at <span className="bold-heavy">gmail.com</span> or <OutsideLink href="http://www.twitter.com/lostmarinero" alt="lostmarinero twitter">@lostmarinero</OutsideLink>.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;