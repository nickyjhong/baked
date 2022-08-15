import React from 'react';
import { Link } from 'react-router-dom';

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className="grid-section">Contact</section>
        <article className="contact">
          <p className="contact-desc">
            Obviously, Baked By Fullstack isn't a real bakery and unfortunately,
            we don't sell any of the products we have listed.
          </p>
          <p className="contact-desc">
            The good news is that the developers of this e-commerce site can be
            contacted!
          </p>
          <h3 className="contact-desc">Our Bakers:</h3>
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="team-member-image"
            ></img>
            <h4 className="team-member-name">Nicole Hong</h4>
            <Link
              to={{ pathname: 'https://github.com/nickyjhong' }}
              target="_blank"
              className="team-member-link"
            >
              Github
            </Link>
            <Link
              to={{
                pathname: '',
              }}
              target="_blank"
              className="team-member-link"
            >
              LinkedIn
            </Link>
          </div>

          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="team-member-image"
            ></img>
            <h4 className="team-member-name">Cherry Xu</h4>
            <Link
              to={{ pathname: 'https://github.com/mscherryxu' }}
              target="_blank"
              className="team-member-link"
            >
              Github
            </Link>
            <Link
              to={{
                pathname: '',
              }}
              target="_blank"
              className="team-member-link"
            >
              LinkedIn
            </Link>
          </div>

          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="team-member-image"
            ></img>
            <h4 className="team-member-name">Amy Wong</h4>
            <Link
              to={{ pathname: 'https://github.com/amyawong' }}
              target="_blank"
              className="team-member-link"
            >
              Github
            </Link>
            <Link
              to={{
                pathname: 'https://www.linkedin.com/in/amyawong/',
              }}
              target="_blank"
              className="team-member-link"
            >
              LinkedIn
            </Link>
          </div>

          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="team-member-image"
            ></img>
            <h4 className="team-member-name">Chris Tomshack</h4>
            <Link
              to={{ pathname: 'https://github.com/Ctomshack' }}
              target="_blank"
              className="team-member-link"
            >
              Github
            </Link>
            <Link
              to={{
                pathname: '',
              }}
              target="_blank"
              className="team-member-link"
            >
              LinkedIn
            </Link>
          </div>
        </article>
      </div>
    );
  }
}

export default Contact;
