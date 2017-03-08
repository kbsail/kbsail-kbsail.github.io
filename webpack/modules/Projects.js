import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'


export const PROJECTS = [
  {
    id: 0,
    info: '',
    live: 'http://reqcheck.healthkc.org',
    title: 'ReqCheck',
    github: 'https://github.com/codeforamerica/ReqCheck',
    languages: 'Ruby, Rails, PostgreSQL, Docker',
    role: 'Lead Developer',
    type: 'Technical Project',
    description: 'Open-source medical algorithm using CDC data to evaluate a patient\'s vaccination record',
    img: '../assets/img/ReqCheckWeb.png'
  },
  {
    id: 1,
    info: 'https://www.codeforamerica.org/summit/workshops/#1955',
    live: '',
    github: '',
    role: 'Co-Leader',
    type: 'Professional Workshop',
    title: 'Technical Talent Initiative',
    description: 'Co-facilitated a workshop at the 2016 Code for America Summit',
    img: '../assets/img/TalentWorkshop.jpg'
  },
  {
    id: 2,
    info: '',
    live: 'https://drive.google.com/file/d/0B1NiEZqYOerQV0lJMHVIa3J0N2s/view',
    github: '',
    role: 'Consultant',
    type: 'Hiring Initiative',
    subtitle: 'Content',
    title: 'KCMO Hiring Initiative',
    description: 'Created a guide for the Kansas City Health Department to assist hiring a new digital services team',
    img: '../assets/img/CreatingADigitalServicesTeam.png' },
  { 
    id: 3,
    info: '',
    website: 'http://flyrlabs.com/',
    github: '',
    role: 'Software Engineer',
    type: 'Technical Project',
    title: 'Flyr FairKeep Pricing APIs ',
    description: 'Built pricing and purchasing APIs for core product',
    img: '../assets/img/GetFlyrWeb.png' },
  { 
    id: 4,
    info: '',
    website: 'http://www.openbrazil.org/',
    live: '',
    github: '',
    role: 'Advisor',
    type: 'Professional Workshop',
    title: 'Code for Brazil',
    description: 'Mentored Code for Brazil in stakeholder management, iterative building and user centered design',
    img: '../assets/img/CforBrazil.png'
  },
  {
    id: 5,
    info: '',
    live: '',
    github: 'https://github.com/lostmarinero/reqcheck-extractor-readme',
    role: 'Sole Developer',
    type: 'Technical Project',
    title: 'ReqCheck Extractor',
    description: 'Continuous https based ETL from legacy SQL Server to Cloud based PostgreSQL database',
    img: ''
  },
  { 
    id: 6,
    info: '',
    live: '',
    github: '',
    role: 'Web Developer',
    type: 'Hackathon',
    title: 'Best Product for Innovation',
    description: '#ChimeHack2 Best product',
    img: ''
  },
  {
    id: 7,
    info: '',
    live: '',
    github: '',
    role: 'Web Developer',
    type: 'Hackathon',
    title: 'Best Product',
    description: 'Chimehack Best product',
    img: ''
  }
]

export default React.createClass({
  render() {
    var linkText = ''
    
    return (
      <div>
        <h1>Recent Projects</h1>
        <div className="projects-main-image">
        </div>
        <div className="projects-row">
          {PROJECTS.map(project => (  
            <div className="project-container" key={project.id}>
              <div className="project-details">
                <div className="project-title">
                  <Link href={`/projects/${project.id}`}>
                    <h4>{project.title}</h4>
                  </Link>
                </div>
                <div className="project-content">
                  <div className="project-skills">
                    <p>{project.role}</p>
                  </div>
                  <div className="project-description">
                    <p>{project.description}</p>
                    {
                      project.languages ? <p className="project-languages">{project.languages}</p> : null
                    }
                  </div>
                  <div className="project-links">
                    {
                      project.website ? <Link href={`${project.website}`} target="_blank"><p>Website</p></Link> : <div/>
                    }
                    {
                      project.live ? <Link href={`${project.live}`} target="_blank"><p>Live</p></Link> : <div/>
                    }
                    {
                      project.info ? <Link href={`${project.info}`} target="_blank"><p>Info</p></Link> : <div/>
                    }
                    {
                      project.github ? <Link href={`${project.github}`} target="_blank"><p>Github</p></Link>: ''
                    }
                  </div>
                </div>
              </div>
              <div className="project-image">
                <Link href={`/projects/${project.id}`}>
                  {
                    project.img ? <img className="responsive-image" style={{ margin: '0' }} src={project.img} /> : <div/>
                  }
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
})

// <p>Formerly of <OutsideLink to="https://codeforamerica.org" alt="Code for America">Code for America</OutsideLink> & <OutsideLink to="https://flyrlabs.com" alt="FlyrLabs">FlyrLabs</OutsideLink>.</p>
// <p>Mentorship with <OutsideLink to="https://missionbit.org" alt="MissionBit">MissionBit</OutsideLink>.</p>
        // <div className="awards">
        //   <div className="awards-title">
        //     <i className="fa fa-2x fa-star" aria-hidden="true" /><h2>Honors and Awards</h2>
        //   </div>
        //   <div className="awards-container">
        //     <div className="award-item">
        //       <h5>Code for America Fellowship</h5>
        //       <p>2016 Engineering Fellow</p>
        //       <div className="chime-tweet">
        //         <TweetEmbed id='684781001101414400'></TweetEmbed>
        //       </div>
        //       <p>Less than 2% of applicants are accepted</p>
        //       <p><Link href="https://www.codeforamerica.org">Code for America</Link>, 2016</p>
        //       <p><Link href="http://archive.codeforamerica.org/about/fellowship/">More Information</Link></p>
        //     </div>
        //     <div className="award-item safebridge">
        //       <h5>Best Product for Incubation</h5>
        //       <p>Awarded for 'SafeBridge'</p>
        //       <div className="chime-tweet">
        //         <TweetEmbed id='620390041789968385'></TweetEmbed>
        //       </div>
        //       <p>Presented by <Link href="https://www.hearst.com/">Hearst Magazines</Link> and <Link href="https://twitter.com/">Twitter</Link></p>
        //       <p><Link href="https://www.youtube.com/watch?v=PzbminSEayU">ChimeHack2</Link>, 2015</p>
        //       <p><Link href="http://www.elle.com/culture/news/a29317/a-hackathon-with-a-conscience/">More Information</Link></p>

        //     </div>
        //     <div className="award-item">
        //       <h5>Best Product</h5>
        //       <p>Awarded for 'ReSound'</p>
        //       <div className="chime-tweet">
        //         <TweetEmbed id='409531616990478336'></TweetEmbed>
        //       </div>
        //       <p>Presented by <Link href="http://www.chimeforchange.org/">Chime for Change</Link> and <Link href="https://twitter.com/">Twitter</Link></p>
        //       <p><Link href="https://www.youtube.com/watch?v=WpHRSi0JFKY">ChimeHack</Link>, 2013</p>
        //       <p><Link href="https://www.fastcompany.com/3023332/innovation-agents/gucci-teams-up-with-twitter-jawbone-and-more-to-tackle-global-womens-issue">More Information</Link></p>
        //     </div>
        //   </div>
        // </div>
