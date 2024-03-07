import React, { Component } from "react";
import logo from "./logo.png";
export class Navbar extends Component {
  
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src={logo} className="img"  width="135" height="40" alt="Error" />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </span>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/categories/Sports" >
                    Sports
                  </a>
                  <a className="dropdown-item" href="/categories/Entertainment">
                    Entertainment
                  </a>
                  <a className="dropdown-item" href="/categories/Business">
                    Business
                  </a>
                  <a className="dropdown-item" href="/">
                    General
                  </a>
                  <a className="dropdown-item" href="/categories/Health">
                    Health
                  </a>
                  <a className="dropdown-item" href="/categories/Science">
                    Science
                  </a>
                  <a className="dropdown-item" href="/categories/Technology">
                    Technology
                  </a>
                </div>
              </li>
              
            </ul>
            
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
