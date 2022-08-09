import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
  <div className="footer-links">
        <Link to={{ pathname: "https://github.com/2206-fsa-gs-team-gemini/baked" }} target="_blank" className="footer-link">Github</Link>
        <Link to='/about' className="footer-link">About</Link>
        <Link to='/contact'className="footer-link">Contact</Link>
  </div>
  </footer>
)

export default Footer 