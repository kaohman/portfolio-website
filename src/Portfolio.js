import React from 'react';

function Portfolio() {
  return (
    <div className='page-padding-div'>
      <h1>portfolio</h1>
      <div id='portfolio-content'>
        <a href='https://github.com/kaohman/bike-see' target='_blank'>
          <h3>bikeSee</h3>
          <img className='screenshots' src='./assets/bikesee-screenshot.png' alt='bike see website'></img>
        </a>
        <a href='https://github.com/kaohman/sea-level-rise-data' target='_blank'>
          <h3>sea level rise api</h3>
          <img className='screenshots' src='./assets/sea-level-rise-screenshot.png' alt='sea level rise website'></img>
        </a>
        <a href='https://github.com/kaohman/nasa-apod' target='_blank'>
          <h3>nasa apod</h3>
          <img className='screenshots' src='./assets/nasa-apod-screenshot.png' alt='nasa astronomy photo of the days website'></img>
        </a>
        <a href='https://github.com/kaohman/national-parks' target='_blank'>
          <h3>mark my parks</h3>
          <img className='screenshots' src='./assets/parks-screenshot.png' alt='mark my parks website'></img>
        </a>
        <a href='https://github.com/kaohman/listy' target='_blank'>
          <h3>listy</h3>
          <img className='screenshots' src='./assets/listy-screenshot.png' alt='listy website'></img>
        </a>
        <a href='https://github.com/kaohman/jeopardy' target='_blank'>
          <h3>space jeopardy</h3>
          <img className='screenshots' src='./assets/jeopardy-screenshot.png' alt='sapce jeopardy website'></img>
        </a>
        <a href='https://github.com/kaohman/js-proto-fun-time' target='_blank'>
          <h3>jsProtoFunTime</h3>
          <img className='screenshots' src='./assets/prototypes-screenshot.png' alt='javascript prototypes website'></img>
        </a>
      </div>
    </div>
  )
}

export default Portfolio;