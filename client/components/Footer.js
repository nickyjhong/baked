import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <ul className="footer-list">
        <li>
          <p>👋</p>
        </li>
        <li>
          <a
            className="footer-link"
            href="https://github.com/2206-fsa-gs-team-gemini/baked"
          >
            Github
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            About The Team
          </a>
        </li>
        <li>
          <a
            className="footer-link"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
