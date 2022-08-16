import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-container">
    <ul className='footer-list'>
      <li className='footer-link'>
        <p className="footer-wave">👋</p>
      </li>
      <li className='footer-link'>
        <Link to={{ pathname: "https://github.com/nickyjhong/baked" }} target="_blank" className="footer-link">Recipe</Link>
      </li>
      <li className='footer-link'>
        <Link to='/about' className="footer-link">About</Link>
      </li>
      <li className='footer-link'>
        <Link to='/contact'className="footer-link">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Footer 