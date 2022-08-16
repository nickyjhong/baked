import React from 'react';
import Contact from './Contact';

export class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-info">
          <h3 className="about-heading">Thanks for stopping by!</h3> 
          <p className="about-description">
            Here at Baked by Fullstack, we guarantee top
            quality product at affordable prices. Our products are freshly
            baked everyday with quality as our top priority. Each baked good is
            handcrafted with love that can be tasted in every bite. 
          </p>
        </div>

        <div className="about-technologies-container">
          <h3 className="about-technologies-heading">Here are some of the technologies we used to make Baked by Fullstack possible!</h3>
          <div className="about-technologies">
            <span className="about-left">
              <ul className="about-technologies-list">
                <li className="about-technologies-item">
                  <img src="/react.png" alt="react-logo" className="about-technologies-pic"/>
                  <span className="about-technologies-name"> React</span>
                </li>
                <li className="about-technologies-item">
                  <img src="/redux.png" alt="redux-logo" className="about-technologies-pic"/>
                  <span className="about-technologies-name"> Redux</span>
                </li>
                <li className="about-technologies-item">
                  <img src="/js.png" alt="js-logo" className="about-technologies-pic"/>
                  <span className="about-technologies-name"> JavaScript</span>
                </li>
                <li className="about-technologies-item">
                  <img src="/nodejs.png" alt="nodejs-logo" className="about-technologies-pic"/>
                  <span className="about-technologies-name"> Node.js</span>
                </li>
              </ul>
            </span>
            <span className="about-right">
              <ul className="about-technologies-list">
                <li className="about-technologies-item">
                  <img src="/postgresql.png" alt="postgresql-logo" className="about-technologies-pic"/>
                  <span className="about-technologies-name"> PostgreSQL</span>
                </li>
                <li className="about-technologies-item">
                  <img src="/html.png" alt="html-logo" className="about-technologies-pic"/>
                  <span className="about-technologies-name"> HTML</span>
                </li>
                <li className="about-technologies-item">
                  <img src="/css.png" alt="css-logo" className="about-technologies-pic"/>
                  <span className="about-technologies-name"> CSS</span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
