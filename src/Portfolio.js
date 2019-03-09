import React from 'react';

function Portfolio() {
  return (
    <div className='page-padding-div'>
      <h1>portfolio</h1>
      <div id='portfolio-content'>
        <a href='https://github.com/kaohman/bike-see'>
          <h3>bikeSee</h3>
          <img className='screenshots' src='./assets/bikesee-screenshot.png' alt='bike see website'></img>
        </a>
        <a href='https://github.com/kaohman/national-parks'>
          <h3>mark my parks</h3>
          <img className='screenshots' src='./assets/parks-screenshot.png' alt='mark my parks website'></img>
        </a>
        <a href='https://github.com/kaohman/listy'>
          <h3>listy</h3>
          <img className='screenshots' src='./assets/listy-screenshot.png' alt='listy website'></img>
        </a>
        <a href='https://github.com/kaohman/jeopardy'>
          <h3>space jeopardy</h3>
          <img className='screenshots' src='./assets/jeopardy-screenshot.png' alt='sapce jeopardy website'></img>
        </a>
        <a href='https://github.com/kaohman/movie-tracker'>
          <h3>movie tracker</h3>
          <img className='screenshots' src='./assets/movie-tracker-screenshot.png' alt='movie tracker website'></img>
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