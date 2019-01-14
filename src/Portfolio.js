import React from 'react';

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <a href='https://github.com/kaohman/national-parks'>
        <h3>Mark My Parks</h3>
        <img className='screenshots' src='./assets/parks-screenshot.png' alt='mark my parks website'></img>
      </a>
      <a href='https://github.com/kaohman/jeopardy'>
        <h3>Space Jeopardy</h3>
        <img className='screenshots' src='./assets/jeopardy-screenshot.png' alt='sapce jeopardy website'></img>
      </a>
      <a href='https://github.com/kaohman/js-proto-fun-time'>
        <h3>jsProtoFunTime</h3>
        <img className='screenshots' src='./assets/prototypes-screenshot.png' alt='javascript prototypes website'></img>
      </a>
    </div>
  )
}

export default Portfolio;