import React from "react";
import { connect } from "react-redux";

export const Home = (props) => {
  const { firstName } = props;
  if (!firstName) {
    return (
      <div>
        <p className="welcome">Hello!</p>
        <br />
        <div className="slider">
          <figure>
            <img
              src={
                "https://images.unsplash.com/photo-1537885895227-237e94a2012f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1587241321921-91a834d6d191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1243&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1511018556340-d16986a1c194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1582659042116-63f96b514135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1601740982034-56bc80e986ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1579372786545-d24232daf58c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              className="home-image"
            />
          </figure>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="welcome">Welcome back, {firstName}!</p>
        <br />
        <div className="slider">
          <figure>
            <img
              src={
                "https://images.unsplash.com/photo-1537885895227-237e94a2012f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1587241321921-91a834d6d191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1243&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1511018556340-d16986a1c194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1582659042116-63f96b514135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1601740982034-56bc80e986ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80"
              }
              className="home-image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1579372786545-d24232daf58c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              className="home-image"
            />
          </figure>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
  };
};

export default connect(mapState)(Home);