import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import DEPArticles from "./DEPArticles";
import DDCArticles from "./DDCArticles";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="level desktop-logo">
            <div className="level-item has-text-centered">
              <span id="nyc">NYCfeed  📰</span> 
            </div>
        </nav>

        <nav
          className="navbar App-header"
          role="navigation"
          aria-label="main navigation"
        >
          
          <div className="navbar-brand">
          <a className="navbar-item mobile-logo">nycfeed 📰 </a>
          <label role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" htmlFor="nav-toggle-state">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </label>
          </div>
          <input type="checkbox" id="nav-toggle-state"/>
          
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                DEP (Environmental Protection)
              </Link>
              <Link to="/DDCArticles" className="navbar-item">
                DDC (Design and Construction)
              </Link>
            </div>
            <div className="navbar-end"></div>
          </div>
          
        </nav>

        <Route exact path="/" component={DEPArticles} />
        <Route path="/DDCArticles" component={DDCArticles} />
      </div>
    </Router>
  );
}

export default App;
