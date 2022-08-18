import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, _setUser, fetchUser } from '../store/singleUser'
import { Link } from "react-router-dom";

export class UpdateUser extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  componentDidMount() {
    this.props.fetchUser()
  }

  componentWillUnmount() {
    this.props.clearUser()
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.updateUser({...this.props.user, ...this.state});
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="update-form form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-container">

          <div className="input-container">
              <label className="labelName" htmlFor="firstName">
                <p>First name</p>
              </label>
              <input
                className="input"
                type="name"
                name="firstName"
                onChange={this.handleChange}
                value={this.state.firstName}
              />
            </div>

            <div className="input-container">
              <label className="labelName" htmlFor="lastName">
                <p>Last name</p>
              </label>
              <input
                className="input"
                type="name"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.lastName}
              />
            </div>

            <div className="input-container">
              <label className="labelName" htmlFor="email">
                <p>Email</p>
              </label>
              <input
                className="input"
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>

            <div className="input-container">
              <label htmlFor="password" className="labelName">
                <p>Password</p>
              </label>
              <input
                className="input"
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>

            <div className="input-container">
              <label htmlFor="address" className="labelName">
                <p>Address</p>
              </label>
              <input
                className="input"
                type="address"
                name="address"
                onChange={this.handleChange}
                value={this.state.address}
              />
            </div>
            <div>
              <button className="button submit-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.singleUser
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
    updateUser: (user) => dispatch(updateUser(user, history)),
    clearUser: () => dispatch(_setUser({}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser)