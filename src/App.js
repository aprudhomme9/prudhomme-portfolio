import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Popper from 'popper.js';

class App extends Component {
  render() {
    return (
      <div classNameName="App">


  <body id="page-top">

    
    <a className="menu-toggle rounded" href="#">
      <i className="fas fa-bars"></i>
    </a>
    <nav id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li className="sidebar-brand">
          <a className="js-scroll-trigger" href="#page-top">Andy Prudhomme</a>
        </li>
        <li className="sidebar-nav-item">
          <a className="js-scroll-trigger" href="#page-top">Top</a>
        </li>
        <li className="sidebar-nav-item">
          <a className="js-scroll-trigger" href="#about">About Me</a>
        </li>
        <li className="sidebar-nav-item">
          <a className="js-scroll-trigger" href="#services">Tools</a>
        </li>
        <li className="sidebar-nav-item">
          <a className="js-scroll-trigger" href="#portfolio">Portfolio</a>
        </li>
        <li className="sidebar-nav-item">
          <a className="js-scroll-trigger" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>

    
    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">Andy Prudhomme</h1>
        <h3 className="mb-5">
          <em>Software Developer</em>
        </h3>
        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">About Me</a>
      </div>
      <div className="overlay"></div>
    </header>

    
    <section className="content-section bg-light" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>Full stack developer with an affinity for data and functionality</h2>
            <p className="lead mb-5">With a focus on React, Django, PostgreSQL</p>
            <a className="btn btn-dark btn-xl js-scroll-trigger" href="#services">Tools & Languages</a>
          </div>
        </div>
      </div>
    </section>

   
    <section className="content-section bg-primary text-white text-center" id="services">
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Developer Tools</h3>
          <h4 className="mb-5">& Languages</h4>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-book-open"></i>
            </span>
            <h4>
              <strong>Languages</strong>
            </h4>
            <p className="text-faded mb-0">
              <p>Javascript</p>
              <p>Python</p>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-screen-desktop"></i>
            </span>
            <h4>
              <strong>Front End</strong>
            </h4>
            <p className="text-faded mb-0">
              <p>React.js</p>
              <p>jQuery</p>
              <p>Bootstrap</p>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-cloud-download"></i>
            </span>
            <h4>
              <strong>Back End</strong>
            </h4>
            <p className="text-faded mb-0">
              <p>Node.js</p>
              <p>MongoDB + Mongoose</p>
              <p>PostgreSQL</p>
              <p>Django</p>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-social-github"></i>
            </span>
            <h4>
              <strong>Other</strong>
            </h4>
            <p className="text-faded mb-0">
              <p>Git and Github</p>
              <p>Heroku</p>
              <p>Postman</p>
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Projects</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>JQuery Blackjack</h2>
                  <p className="mb-0">Built entirely with Javascript</p>
                </span>
              </span>
              <img className="img-fluid" src="..public/img/blackjack.png" height="200"alt=""/>
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Brewr - A Brewery Check In App</h2>
                  <p className="mb-0">Built with MongoDB, Express.js, and Node.js</p>
                </span>
              </span>
              <img className="img-fluid" src="brewr.png" alt=""/>
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>MemeStream</h2>
                  <p className="mb-0">Built with MongoDB, React.js, Express.js, and Node.js</p>
                </span>
              </span>
              <img className="img-fluid" src="unspecified.png" alt=""/>
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>TBD Final Project</h2>
                  <p className="mb-0">Text Text Text</p>
                </span>
              </span>
              <img className="img-fluid" src="blackjack.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="content-section bg-primary text-white">
      <div className="container text-center">
        <h2 className="mb-4">Maybe something goes here</h2>
        <a href="#" className="btn btn-xl btn-light mr-4">Button</a>
        <a href="#" className="btn btn-xl btn-dark">Button</a>
      </div>
    </section>

    <footer className="footer text-center">
      <div className="container">
        <ul className="list-inline mb-5">
          <li className="list-inline-item">
            <a className="social-link rounded-circle text-white" href="#">
              <i className="icon-social-github"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="social-link rounded-circle text-white" href="#">
              <i className="icon-social-linkedin"></i>
            </a>
          </li>
        </ul>
        <p className="text-muted small mb-0">Copyright &copy; Your Website 2018</p>
      </div>
    </footer>


    <a className="scroll-to-top rounded js-scroll-trigger" href="#page-top">
      <i className="fas fa-angle-up"></i>
    </a>


  </body>


      </div>
    );
  }
}

export default App;
