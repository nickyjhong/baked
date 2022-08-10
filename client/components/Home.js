import React from 'react';
import { connect } from 'react-redux';

export const Home = (props) => {
  const { firstName } = props;
  return (
    <div>
      home page: hello, {firstName}
    </div>
  );
};

const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
  };
};

export default connect(mapState)(Home);
