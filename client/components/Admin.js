import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchUsers } from '../store/allUsers'

export const Admin = () => {
  return (
    <div className="div-container">
      <Link to={`/admin/users`}>
        <button>
          See all users
        </button>
      </Link>
      <Link to={`/admin/products`}>
        <button>
          Edit a product
        </button>
      </Link>
      <Link to={`/products/add`}>
        <button>
          Add a product
        </button>
      </Link>

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

