// module/About.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
		var cardList = [
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
	  		<p>I am a web developer and user experience researcher with a passion for well designed, user centered websites and applications.</p>
	  		<p>For more information, please see my <Link href={linkedInUrl}>LinkedIn Profile</Link> or <Link href={resumeUrl}>Resume</Link>.</p>

				<p>My core technologies are Ruby (Rails, Sinatra), Python (Django, Flask) and React (with Redux)</p>
				<p>I was fortunate to be one of only 8 Developers chosen for the 2016 Code for America Fellowship Program</p>

	  		<p>I give back through volunteer teaching web development classes and mentoring new web developers, of all ages with a goal of promoting under-represented developers in the tech industry.</p>

	  		<p>Some of the accomplishments I am most proud of include:</p>
	
	  		<div className='about-container'>
	  			{cards}
	  		</div>

	  		<p>I am committed to delivering the highest quality code, and work tirelessly to ensure my clients are satisfied.</p>
	  	</div>
	  )
  }
})
