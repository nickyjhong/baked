import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/allUsers'

export const Admin = (props) => {
  console.log(props.getAllUsers)
  return (
    <div>Admin</div>
  )
}

const mapStateToProps = (state) => ({
  state: state.allUsers,
})

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)

