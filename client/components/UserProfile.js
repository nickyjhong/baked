import React from 'react';
// import UpdateUser from './UpdateUser'
import {connect} from 'react-redux'
import PreviousOrders from './PreviousOrders';

export function UserProfile(props) {
  // const { name, email, password } = props
  const { name } = props
    return (
    <div className="user-profile">
      <div className="welcome">
        <span id="welcome-user">
          <h1>Welcome, { name }</h1>
          {/* <p>{email}</p>
          <p>{password}</p> */}
        </span>
        <p>PREVIOUS ORDERS BELOW</p>
          <PreviousOrders />
      </div>
      {/* <div className="edit-profile">
        <p>Edit profile</p>
        <UpdateUser />
      </div> */}
    </div>
  );
}

const mapState = state => {
  return {
    name: state.auth.name,
    // email: state.auth.email,
    // password: state.auth.password
  }
}

export default connect(mapState)(UserProfile)