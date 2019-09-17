import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';


export const NavBar = ({ history }) => {
  const navPositionStyle = {
    backgroundColor: '#24292e',
  };
  if (history.location.pathname === '/home' || history.location.pathname === '/' || history.location.pathname === '/signup') {
    navPositionStyle.backgroundColor = 'transparent';
  }

  return (
    <nav style={navPositionStyle} className="navbar" data-test="navbarComponent">
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
};

NavBar.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: '',
    }),
  }).isRequired,
};

export default withRouter(NavBar);
