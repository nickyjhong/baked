import React from 'react';
import { connect } from 'react-redux';

export const Home = (props) => {
  const { firstName } = props;
  return (
  <div>
    <div className="welcome">
      Hello {firstName}
    </div>
  <div className='home-images'>
    <img src="" />
  </div>
  </div>);
};

const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
  };
};

export default connect(mapState)(Home);
