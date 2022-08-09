import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/allUsers'

export const Admin = () => {
  return (
    <div>
      <button>
        See all users
      </button>
      <button>
        Edit a product
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state: state.allUsers,
})

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)

