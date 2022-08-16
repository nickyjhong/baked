import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-container">
    <ul className='footer-list'>
      <li className='footer-link'>
        <a href="https://nicolehong.dev" className="footer-wave">👋</a>
      </li>
      <li className='footer-link'>
        <a href="https://github.com/nickyjhong/baked" className="footer-link">
          Recipe
        </a>
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