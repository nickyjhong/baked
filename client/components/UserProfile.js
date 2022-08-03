import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// thunk from redux store?
// import EditUser as a button?

// if not logged in, show login here or sign up here
class UserProfile extends React.Component {
  componentDidMount() {
    try {
      console.log(this);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="user-profile">
          <div className="welcome">
            <p id="welcome-user">
              <strong>Welcome, {/* {this.props.name} */}</strong>
            </p>
            <p>Click here to view previous orders</p>
            <button>Past Orders</button>
            {/* Previous order component? */}
          </div>
          <div className="edit-profile">
            <p>Click here to update profile</p>
            <button>Edit Profile</button>
            {/* Edit Profile component */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserProfile;
