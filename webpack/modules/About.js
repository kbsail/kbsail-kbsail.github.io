// module/About.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
		var cardList = [
			'Maintained environment and application level HIPAA compliance for a public health application.',
			'Built a Clinical Decision Support for Immunizations Algorithm (and web application) using CDC data to analyze patient health records and respond with necessary vaccines.',
			'Designed and wrote the interview and onboarding process for new developers at Flyr, to help integrate them into the engineering team as we grew.',
			'Built the core pricing and purchasing APIs for Flyr to sell "FareKeep", a flight purchasing insurance product.',
			'Integrated our APIs with a 3rd party, legacy airline pricing XML API to stream data using ExpressJS (Node).',
			'Won Hearst Magazine\'s Best Product for Incubation Award at ChimeHack2 in July 2015. We built SafeBridge, an anonymous SMS to chat for survivors of domestic violence and their advocates. Hackathon was organized by twitter, ChimeForChange, and Kering Foundation.',
			'Won Chime for Change\'s Best Product Award at ChimeHack in December of 2013. We built ReSound, a product connecting women globally to support Education, Health and Justice. Organized by twitter, Chime for Change, Women Who Code and Gucci.',
			'Taught an afterschool class of 10 middle school public school students in coding and technology.',
			<a href="https://codeforamerica.org">2016 Code for America Engineering Fellow</a>
	  ]
	  var linkedInUrl = "https://www.linkedin.com/in/kevinberry1/"
	  var resumeUrl = ""
	  var cards = []
	  for (var i=0; i < cardList.length; i++) {
	  	cards.push(<div className='about-card'><p>{cardList[i]}</p></div>)
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
							<p>Web developer passionate about building user centered applications.</p>
						</div>
					</div>
				</div>
				<div className="about-sections">
	  			<div className="core-tech">
						<h2>Core Technologies</h2>
						<p>Ruby (Rails, Sinatra)<br/>Python (Django, Flask)<br/>React (with Redux)</p>
					</div>
					<div className="hobies">
					<h2>Hobbies</h2>
						<p>Enjoy volunteering, learning new technologies, skiing, sailing and playing soccer.</p>
						<p>Fluent in English and Spanish.</p>
					</div>
					<div className="awards">
		  			<h2>Awards</h2>
						<p>So many. So, so many.</p>
	  			</div>
				</div>
	  		<h2>Accomplishments</h2>
				<div className='about-container'>
	  			{cards}
	  		</div>

	  		<p>I follow coding best practices, communicate effectively and am committed to delivering the highest quality code.</p>
	  	</div>
	  )
  }
})
