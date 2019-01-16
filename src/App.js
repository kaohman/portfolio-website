import React, { Component } from 'react';
import './App.css';
import './styles/normalize.css';
import './styles/main.scss';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'karin ohman'
    };
  }

  updatePage = (event) => {
    event.preventDefault();
    this.setState({
      currentPage: event.target.innerText
    });
  }

  pageToLoad = () => {
    switch (this.state.currentPage) {
      case 'about': 
        return(
          <About />
        );
      case 'portfolio':
        return(
          <Portfolio />
        );
      case 'contact':
        return(
          <Contact />
        );
      default: 
        return (
          <div className='page-padding-div' id='homepage-content'>
            <h1 id='title-name'>KARIN OHMAN</h1>
            <h2 id='title-subheader'>front-end web developer</h2>
            <p id='title-tagline'>I am an earth scientist turned web developer. I am passionate about sharing data with the world through beautifully designed web applications. Please click on the links above to learn more.</p>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <nav>
          <p onClick={this.updatePage}><span className='links'>karin ohman</span>: front-end developer</p>
          <p onClick={this.updatePage} className='links'>about</p>
          <p onClick={this.updatePage} className='links'>portfolio</p>
          <p onClick={this.updatePage} className='links'>contact</p>
        </nav>
        { 
          this.pageToLoad()
        }
      </div>
    );
  }
}

export default App;
