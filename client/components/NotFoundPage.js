import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NotFoundPage = ({ isAdmin }) => {
  return (
    <>
      {isAdmin ? (
        <div className="nfp-container">
          <img src="https://www.boredpanda.com/blog/wp-content/uploads/2019/09/food-realistic-cakes-luke-vincentini-fb2.png" />
          <p className="nfp-info">We ran out of eggs and haven't been able to make a recipe for that yet!</p>
          <p className="nfp-info">Why don't you give <Link to='/admin/products' className="nfp-info nfp-link">these other treats</Link> a chance?</p>
        </div>
      ) : (
        <div className="nfp-container">
          <img src="https://www.boredpanda.com/blog/wp-content/uploads/2019/09/food-realistic-cakes-luke-vincentini-fb2.png" />
          <p className="nfp-info">We ran out of eggs and haven't been able to make a recipe for that yet!</p>
          <p className="nfp-info">Why don't you give <Link to='/products' className="nfp-info nfp-link">these other treats</Link> a chance?</p>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: !!state.auth.isAdmin,
  };
};

export default connect(mapStateToProps)(NotFoundPage);