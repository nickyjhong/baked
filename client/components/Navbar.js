import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn, id }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/products" className="navLink">
            Shop
          </Link>
          <a href="/" onClick={handleClick} className="navLink">
            Logout
          </a>
          <Link to={`/users/${id}`} className="navLink">
            Profile
          </Link>
          {/* <Link to="/profile" className="navLink">
            Profile
          </Link> */}
          <Link to={`/users/${id}/cart`} className="navLink">
            Cart
          </Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/" className="navLink">
            Home
          </Link>
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
            Cart
          </Link>
        </div>
      )}
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    id: state.auth.id
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
