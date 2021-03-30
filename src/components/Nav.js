import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                {/* begin menu */}
<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div className="container">
    <span className="navbar-brand js-scroll-trigger">React Router - News</span>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
      <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tin">News</NavLink>
          </li>
          <li>
            <NavLink to="/lien-he">Contact</NavLink>
          </li>
      </ul>
    </div>
  </div>
</nav>
{/* end menu */}

            </div>
        );
    }
}

export default Nav;