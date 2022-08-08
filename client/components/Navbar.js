import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div className="nav-container">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">
            <img src="./baked-logo.png" alt="logo" className="navLogo"/>
          </Link>
          <Link to="/products" className="navLink">Shop</Link>
          <a href="/" onClick={handleClick} className="navLink"> 
            Logout
          </a>
          <Link to="/profile" className="navLink">Profile</Link>
          <Link to="/cart" className="navLink">Cart</Link>
        </div>
      ) : (
        <div className="nav-container">
          {/* The navbar will show these links before you log in */}
          <Link to="/home">
            <img src="./baked-logo.png" alt="logo" className="navLogo"/>
          </Link>
          <Link to="/products" className="navLink">Shop</Link>
          <Link to="/login" className="navLink">Login</Link>
          <Link to="/signup" className="navLink">Sign Up</Link>
          <Link to="/cart" className="navLink">Cart</Link>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
