import React from 'react';

function Portfolio() {
  return (
    <div className='page-padding-div'>
      <h1>portfolio</h1>
      <div id='portfolio-content'>
        <a href='https://github.com/kaohman/national-parks'>
          <h3>mark my parks</h3>
          <img className='screenshots' src='./assets/parks-screenshot.png' alt='mark my parks website'></img>
        </a>
        <a href='https://github.com/kaohman/jeopardy'>
          <h3>space jeopardy</h3>
          <img className='screenshots' src='./assets/jeopardy-screenshot.png' alt='sapce jeopardy website'></img>
        </a>
        <a href='https://github.com/kaohman/js-proto-fun-time'>
          <h3>jsProtoFunTime</h3>
          <img className='screenshots' src='./assets/prototypes-screenshot.png' alt='javascript prototypes website'></img>
        </a>
      </div>
    </div>
  )
}

export default Portfolio;