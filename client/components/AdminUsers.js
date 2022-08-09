import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/allUsers'

export class AdminUsers extends Component {
  render() {
    console.log(this.props.getAllUsers)
    return (
      <div>
        Users
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state.allUsers,
})

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers)
