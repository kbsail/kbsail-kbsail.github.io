// module/About.js
import React from 'react'
import { Link } from 'react-router'
import TweetEmbed from 'react-tweet-embed'

export default React.createClass({
  render() {
		var aboutList = [
			['Technical', 'Maintained HIPAA compliance for a public health application.'],
			['Technical', 'Built algorithm with CDC information to analyze patient health records.'],
			['Technical', 'Built a Clinical Decision Support for Immunizations web application to evaluate vaccine records.'],
			['Technical', 'Integrated 3rd party, legacy airline pricing XML APIs into our APIs using Python.'],
			['Leadership', 'Created onboarding process at Flyr to integrate new hires into the engineering as we grew from 2 to 7.'],
			['Leadership', 'Wrote and completed technical interview for engineering candidates at Flyer.'],
			['Leadership', 'Co-founding Board Member and elected Board Vice President of non-profit community sailing center.'],
			['Mentorship', 'Taught coding afterschool program for students from under-represented communities in technology.'],
			['Mentorship', 'Advise Code for Brazil on iterative building, government partnerships and stakeholder management.'],
	  ]
	  var iconDict = {
	  	Technical: 'fa-laptop',
	  	// Mentorship: 'fa-handshake-o',
	  	Mentorship: 'fa-graduation-cap',
	  	Leadership: 'fa-users',
	  	Awards: 'fa-star'
	  }
	  var linkedInUrl = 'https://www.linkedin.com/in/kevinberry1/',
	  	resumeUrl = '',
	  cardDict = {
	  	Technical: [],
	  	Leadership: [],
	  	Mentorship: []
	  }
	  for (var i=0; i < aboutList.length; i++) {
	  	var item = <li key={[i]}><i className="fa fa-angle-double-right" aria-hidden="true"/>&nbsp;&nbsp;{aboutList[i][1]}</li>
	  	switch (aboutList[i][0]) {
	  		case 'Technical':
	  			cardDict['Technical'].push(item);
	  			break;
	  		case 'Leadership':
	  			cardDict['Leadership'].push(item);
	  			break;
	  		case 'Mentorship':
	  			cardDict['Mentorship'].push(item);
	  			break;
	  		default:
	  			break
	  	}
	  }
	  var content = []
	  for (var key in cardDict) {
  		if (cardDict.hasOwnProperty(key)) {
    		content.push(
    			<div key={key} className="about-content">
    				<i className={`fa fa-2x ${iconDict[key]}`} aria-hidden="true" />
    				<h2>{key}</h2>
    				<ul className="about-details">
    					{cardDict[key]}
    				</ul>
    			</div>
    		);
  		}
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
							<p>Specializing in Ruby, Python and React.</p>
							<p>Active teacher and mentor.</p>
							<p>Fluent in Spanish.</p>
						</div>
					</div>
				</div>
	  		<div className="personal-highlights">
		  		{content}
				</div>
				<div className="awards">
					<div className="awards-title">
						<i className="fa fa-2x fa-star" aria-hidden="true" /><h2>Honors and Awards</h2>
					</div>
					<div className="awards-container">
						<div className="award-item">
							<h5>Code for America Fellowship</h5>
							<p>2016 Engineering Fellow</p>
							<div className="chime-tweet">
								<TweetEmbed id='684781001101414400'></TweetEmbed>
							</div>
							<p>Less than 2% of applicants are accepted</p>
							<p><Link href="https://www.codeforamerica.org">Code for America</Link>, 2016</p>
							<p><Link href="http://archive.codeforamerica.org/about/fellowship/">More Information</Link></p>
						</div>
						<div className="award-item safebridge">
							<h5>Best Product for Incubation</h5>
							<p>Awarded for 'SafeBridge'</p>
							<div className="chime-tweet">
								<TweetEmbed id='620390041789968385'></TweetEmbed>
							</div>
							<p>Presented by <Link href="https://www.hearst.com/">Hearst Magazines</Link> and <Link href="https://twitter.com/">Twitter</Link></p>
							<p><Link href="https://www.youtube.com/watch?v=PzbminSEayU">ChimeHack2</Link>, 2015</p>
							<p><Link href="http://www.elle.com/culture/news/a29317/a-hackathon-with-a-conscience/">More Information</Link></p>

						</div>
						<div className="award-item">
							<h5>Best Product</h5>
							<p>Awarded for 'ReSound'</p>
							<div className="chime-tweet">
								<TweetEmbed id='409531616990478336'></TweetEmbed>
							</div>
							<p>Presented by <Link href="http://www.chimeforchange.org/">Chime for Change</Link> and <Link href="https://twitter.com/">Twitter</Link></p>
							<p><Link href="https://www.youtube.com/watch?v=WpHRSi0JFKY">ChimeHack</Link>, 2013</p>
							<p><Link href="https://www.fastcompany.com/3023332/innovation-agents/gucci-teams-up-with-twitter-jawbone-and-more-to-tackle-global-womens-issue">More Information</Link></p>
						</div>
					</div>
				</div>
				
	  	</div>
	  )
  }
})

// <p>I follow coding best practices, communicate effectively and am committed to delivering the highest quality code.</p>