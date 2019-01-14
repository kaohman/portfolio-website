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
          <div>
            <h1>Karin Ohman</h1>
            <h2>Front-End Web Developer</h2>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <nav>
          <button onClick={this.updatePage}>karin ohman</button> front end developer
          <button onClick={this.updatePage}>about</button>
          <button onClick={this.updatePage}>portfolio</button>
          <button onClick={this.updatePage}>contact</button>
        </nav>
        { 
          this.pageToLoad()
        }
      </div>
    );
  }
}

export default App;
