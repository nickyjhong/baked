import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {isAdmin ? (
            <div className="nav-container">
              {/* Navbar if logged in but not admin */}
              <Link to="/">
                <img src="/baked-logo.png" alt="logo" className="navLogo" />
              </Link>
              <div className="nav-links">
                <Link to="/admin" className="navLink">
                  Admin
                </Link>
                <Link to="/admin/products" className="navLink">
                  Shop
                </Link>
                <a href="/" onClick={handleClick} className="navLink">
                  Logout
                </a>
                <Link to="/profile" className="navLink">
                  Profile
                </Link>
                <Link to="/cart" className="navLink">
                  Cart 🛒
                </Link>
              </div>
            </div>
          ) : (
            <div className="nav-container">
              {/* Navbar if logged in but not admin */}
              <Link to="/">
                <img src="/baked-logo.png" alt="logo" className="navLogo" />
              </Link>
              <div className="nav-links">
                <Link to="/products" className="navLink">
                  Shop
                </Link>
                <a href="/" onClick={handleClick} className="navLink">
                  Logout
                </a>
                <Link to="/profile" className="navLink">
                  Profile
                </Link>
                <Link to="/cart" className="navLink">
                  Cart 🛒
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="nav-container">
          {/* Navbar if not logged in */}
          <Link to="/">
            <img src="/baked-logo.png" alt="logo" className="navLogo" />
          </Link>
          <div className="nav-links">
            <Link to="/products" className="navLink">
              Shop
            </Link>
            <Link to="/login" className="navLink">
              Login
            </Link>
            <Link to="/signup" className="navLink">
              Sign Up
            </Link>
            <Link to="/cart" className="navLink">
              Cart 🛒
            </Link>
          </div>
        </div>
      )}
    </nav>
  </div>
);

const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: !!state.auth.isAdmin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
