import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/allUsers'

export class AllUsers extends Component {
  render() {
    return (
      <div>
        
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
