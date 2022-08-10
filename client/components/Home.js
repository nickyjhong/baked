import React from 'react';
import { connect } from 'react-redux';

export const Home = (props) => {
  const { firstName } = props;
  return (
    <div className="cover-container bg-overlay">
      <div className="home-main">
        {firstName ? (
          <h1>Hello, {firstName}</h1>
        ) : (
          <h1>Welcome to Baked by Fullstack</h1>
        )}

      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
  };
};

export default connect(mapState)(Home);
