import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contact Information</h2>
      <a href='https://github.com/kaohman'>
        <img className='logo' src='./assets/github-logo.png' alt='github logo'></img>
      </a>
      <a href='https://www.linkedin.com/in/karin-ohman/'>
        <img className='logo' src='./assets/linkedin-logo.png' alt='linked in logo'></img>
      </a>
      <a href="mailto:kaohma@gmail.com">Email Me</a>
    </div>
  )
}

export default Contact;