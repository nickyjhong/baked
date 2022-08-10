import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
  <div className="footer-container">
    <ul className='footer-list'>
      <li>
        <p>👋</p>
      </li>
      <li className='footer-link'>
        <Link to={{ pathname: "https://github.com/2206-fsa-gs-team-gemini/baked" }} target="_blank" className="footer-link">Recipe</Link>
      </li>
      <li className='footer-link'>
        <Link to='/about' className="footer-link">About</Link>
      </li>
      <li className='footer-link'>
        <Link to='/contact'className="footer-link">Contact</Link>
      </li>
    </ul>
  </div>
  </footer>
)

export default Footer 