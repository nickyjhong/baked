import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/allUsers';

export class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state);
  }
  render() {
    return (
      <div className="create-form form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div className="input-container">
              <label className="labelName">
                <p>First Name</p>
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  value={this.state.firstName}
                />
              </label>
            </div>

            <div className="input-container">
              <label className="labelName">
                <p>Last Name</p>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />
              </label>
            </div>

            <div className="input-container">
              <label className="labelName">
                <p>Email</p>
                <input
                  className="input"
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </label>
            </div>

            <div className="input-container">
              <label className="labelName">
                <p>Password</p>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </label>
            </div>
            <div>
              <button className="button submit-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createUser: (props) => dispatch(createUser(props, history)),
  };
};

export default connect(null, mapDispatchToProps)(CreateUser);
