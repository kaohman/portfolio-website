import React from 'react';

function About() {
  return (
    <div className='page-padding-div'>
      <h1>about me</h1>
      <div id='about-content'>
        <img id='headshot-image' src='./assets/headshot2.jpg' alt='head shot'></img>
        <div id='about-text'>
          <p>I am a Denver based web developer passionate about front-end development as a means to convey complicated data and information to a broader audience. I'm excited by innovation and creating products and solutions from scratch with code. My background working with scientific data and data analysis have taught me that how you display and communicate information greatly impacts how powerful an impact it will have on the audience.</p>
          <p>As a front-end engineer, I am proficient in HTML, CSS (including SASS), and Javascript. I have a strong foundation in Reactjs, DOM manipulation, and Object-Oriented Programming. I also have knowledge of UX/UI principles to build desktop, mobile and web apps. Additionally, I am proficient with team collaboration using git, GitHub, agile workflow, and Atlassian software.</p>
          <p>My educational background and experience are in coastal and climate change resiliency so I am particularly passionate about those topics. I have worked extensively with Geographic Information Systems (GIS) software as a useful tool to analyze and visualize data.</p>
          <p>Outside of coding, I enjoy many outdoor activities including mountain biking, hiking, camping. I also play soccer, run, and love knitting.</p>
        </div>
      </div>
    </div>
  )
}

export default About;