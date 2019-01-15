import React from 'react';

function Contact() {
  return (
    <div className='page-padding-div'>
      <h1>contact information</h1>
      <div id='contact-content'>
        <a href='https://github.com/kaohman'>
          <img className='logo' src='./assets/github-logo.png' alt='github logo'></img>
          <span>GitHub</span>
        </a>
        <a href='https://www.linkedin.com/in/karin-ohman/'>
          <img className='logo' src='./assets/linkedin-logo.png' alt='linked in logo'></img>
          <span>LinkedIn</span>
        </a>
        <a href="mailto:kaohma@gmail.com">
          <img className='logo' id='contact-headshot' src='./assets/headshot.jpg' alt='head shot'></img>
          <span>Email Me</span>
        </a>
      </div>
    </div>
  )
}

export default Contact;