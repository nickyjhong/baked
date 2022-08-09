import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/allUsers';

export class AdminUsers extends Component {
  async componentDidMount() {
    await this.props.getAllUsers();
  }

  render() {
    const users = this.props.users;
    return (
      <div>
        <h2>Users:</h2>
        {users.map((user) => (
          <div key={user.id}>
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName} </p>
            <p>Email: {user.email} </p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
