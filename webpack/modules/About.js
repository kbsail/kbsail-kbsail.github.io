// module/About.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
		var cardList = [
			'Maintained environment and application level HIPAA compliance for a public health application.',
			'Built a Clinical Decision Support for Immunizations Algorithm (and web application) using CDC data to analyze patient health records and respond with necessary vaccines.',
			'Designed and wrote the interview and onboarding process for new developers at Flyr, to help integrate them into the engineering team as we grew.',
			'Built the core pricing and purchasing APIs for Flyr to sell "FareKeep", the first product for consumers.',
			'Integrated our APIs with a 3rd party, legacy airline pricing XML API to stream data using ExpressJS (Node).',
			'Won Hearst Magazine\'s Best Product for Incubation Award at ChimeHack2 in July 2015. We built SafeBridge, an anonymous SMS to chat for survivors of domestic violence and their advocates. Hackathon was organized by twitter, ChimeForChange, and Kering Foundation.',
			'Won Chime for Change\'s Best Product Award at ChimeHack in December of 2013. We built ReSound, a product connecting women globally to support Education, Health and Justice. Organized by twitter, Chime for Change, Women Who Code and Gucci.'
	  ]
	  var linkedInUrl = "https://www.linkedin.com/in/kevinberry1/"
	  var resumeUrl = ""
	  var cards = []
	  for (var i=0; i < cardList.length; i++) {
	  	cards.push(<div className='about-card'><p>{cardList[i]}</p></div>)
	  }
	  return (
	  	<div>
	  		<h1>About</h1>
	  		
	  		<div className="flex-container">
  				<div className="front-photo">
    				<img src="../profile-photo.jpg" className="profile-photo responsive-image" alt="Profile Photo" />
  				</div>
	  			<h5>My name is Kevin Berry, and I am a web developer and user experience researcher passionate about building user centered applications.</h5>
	  			<h5><Link href={linkedInUrl}>LinkedIn Profile</Link></h5>
	  			<h5><Link href={resumeUrl}>Resume</Link></h5>
					<h5>My core technologies are Ruby (Rails, Sinatra), Python (Django, Flask) and React (with Redux)</h5>
				</div>
				<p><a href="https://codeforamerica.org">2016 Code for America Engineering Fellow</a>
				Award winning application developer.
				I believe strongly in user-centered design and building iteratively.
				Spent a yearlong immersion in HIPAA compliant healthcare applications.
				Am active in the community through mentorship.</p>
				<p>I was fortunate to be one of only 8 Developers chosen for the 2016 Code for America Fellowship Program</p>

	  		<p>I give back through volunteer teaching web development classes and mentoring new web developers, of all ages with a goal of promoting under-represented developers in the tech industry.</p>

	  		<p>Some of the accomplishments I am most proud of include:</p>
	
				<div className='about-container'>
	  			{cards}
	  		</div>

	  		<p>I follow coding best practices, communicate effectively and am committed to delivering the highest quality code.</p>
	  	</div>
	  )
  }
})
