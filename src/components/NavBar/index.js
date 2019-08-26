import React from 'react';
import './style.css';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav style={nav_position_style} className="navbar" data-test="navbarComponent">
        <div className="container nav-container">
          <Link className="logo" to="/">
            Banka
          </Link>

          <label data-test="logoComponent" htmlFor="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" />

          <div className="collapse">
            <ul className="navbar-nav">
              <NavLink
                className="nav-link"
                activeClassName="activeRoute"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="activeRoute"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="activeRoute"
                to="/signup"
              >
                Signup
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="activeRoute"
                to="/contact"
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const nav_position_style = {
  position: 'fixed',
  top: 0,
  backgroundColor: 'transparent'
};

export default NavBar;
