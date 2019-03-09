import React, { Component } from 'react';
import './App.css';
import './styles/normalize.css';
import './styles/main.scss';
import About from './About';
import Portfolio from './Portfolio';
import Home from './Home';
import Contact from './Contact';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';


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
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink exact className='links' to='/'><span className='links'>karin ohman</span>: front-end developer</NavLink>
          <NavLink exact className='links' to='/about'>about</NavLink>
          <NavLink exact className='links' to='/portfolio'>portfolio</NavLink>
          <NavLink exact className='links' to='/contact'>contact</NavLink>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
        { 
          this.pageToLoad()
        }
      </div>
    );
  }
}

export default withRouter(App);
