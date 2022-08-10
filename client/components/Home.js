import React from 'react';
import { connect } from 'react-redux';

export const Home = (props) => {
  const { firstName } = props;
  return (
    <div className="cover-container bg-overlay">
      <div className="home-main">
        <h1>Hello, {firstName}</h1>
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
