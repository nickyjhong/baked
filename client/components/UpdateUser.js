import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, setUser } from '../store/singleUser'

export class UpdateUser extends Component {
  constructor() {
    this.state = {
      name: '',
      email: '',
      password: '',
      address: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.id !== this.props.user.id) {
      this.setState({
        name: this.props.user.name || '',
        email: this.props.user.email || '',
        password: this.props.user.password || '',
        address: this.props.user.address || ''
      })
    }
  }
  componentWillUnmount() {
    this.props.clearUser()
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.updateUser(this.props.user.id, this.state);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div className="update-form form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-container">

          <div className="input-container">
              <label className="labelName" htmlFor="name">
                <p>Name</p>
              </label>
              <input
                className="input"
                type="name"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (id, update) => dispatch(updateUser(id, update)),
    clearUser: () => dispatch(setUser({}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser)