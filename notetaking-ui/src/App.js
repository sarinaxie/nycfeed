import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AllNotes from "./AllNotes";
import NewNote from "./NewNote";
import EditNote from "./EditNote";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="level desktop-logo">
            <div className="level-item has-text-centered">
              <span id="nyc">NYCfeed</span> 📖
            </div>
        </nav>

        <nav
          className="navbar App-header"
          role="navigation"
          aria-label="main navigation"
        >
          
          <div className="navbar-brand">
          <a className="navbar-item mobile-logo">nycfeed 📖</a>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          </div>
          
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                DEP (Environmental Protection)
              </Link>
              <Link to="/newnote" className="navbar-item">
                DDC (Design and Construction)
              </Link>
            </div>
            <div className="navbar-end"></div>
          </div>
          
        </nav>

        <Route exact path="/" component={AllNotes} />
        <Route path="/newnote" component={NewNote} />
        <Route path="/note/:id" component={EditNote} />
      </div>
    </Router>
  );
}

export default App;
