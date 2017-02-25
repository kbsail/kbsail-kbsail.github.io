// module/About.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
		var cardList = [
			['Technical', 'Maintained environment and application level HIPAA compliance for a public health application.'],
			['Technical', 'Built Algorithm using CDC data to analyze patient health records and respond with necessary vaccines.'],
			['Technical', 'Built a Clinical Decision Support for Immunizations web application to evaluate vaccine records.'],
			['Leadership', 'Created onboarding process at Flyr to integrate new hires into the engineering as we grew from 2 to 7.'],
			['Leadership', 'Wrote and completed technical interview for engineering candidates at Flyer.'],
			['Technical', 'Built the core pricing and purchasing APIs for Flyr\'s "FareKeep", a flight insurance product.'],
			['Technical', 'Integrated 3rd party, legacy airline pricing XML APIs into our APIs using Python.'],
			['Award', 'Won Hearst Magazine\'s Best Product for Incubation Award at ChimeHack2 (2015) for \'SafeBridge\'.'],
			['Award', 'Won Chime for Change\'s Best Product at ChimeHack (2013) for \'ReSound\'.'],
			['Leadership', 'Co-founding Board Member and elected Board Vice President of non-profit community sailing center.'],
			['Mentorship', 'Taught coding afterschool program for students from under-represented communities in technology.'],
			['Mentorship', 'Advise Code for Brazil on iterative building, government partnerships and stakeholder management.'],
			['Technical', <a href="https://codeforamerica.org">2016 Code for America Engineering Fellow</a>]
	  ]
	  var linkedInUrl = "https://www.linkedin.com/in/kevinberry1/"
	  var resumeUrl = ""
	  var cards = []
	  for (var i=0; i < cardList.length; i++) {
	  	cards.push(<div className='about-card'><h5>{cardList[i][0]}</h5><p>{cardList[i][1]}</p></div>)
	  }
	  return (
	  	<div className="about-page">
	  		<div className="flex-container mini-profile">
  				<div className="front-photo">
    				<img src="../profile-photo.jpg" className="profile-photo responsive-image" alt="Profile Photo" />
  				</div>
  				<div className="front-title">
	  				<h5 className="name-title">Kevin Berry</h5>
	  				<h5><Link href={linkedInUrl}>LinkedIn</Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link href={resumeUrl}>Resume</Link></h5>
					</div>
					<div className="front-about">
						<div>
							<p>Web developer passionate about user centered design.</p>
							<p>Code mostly in Ruby, Python and React</p>
							<p>Have a strong interest in teaching and mentorship.</p>
							<p>Fluent in Spanish.</p>
							<p>I follow coding best practices, communicate effectively and am committed to delivering the highest quality code.</p>
						</div>
					</div>
				</div>
	  		<div className="personal-highlights">
		  		<h2>Some Highlights</h2>
					<div className='about-container'>
		  			{cards}
		  		</div>
				</div>
	  	</div>
	  )
  }
})
