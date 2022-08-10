import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchUsers } from '../store/allUsers'

export const Admin = () => {
  return (
    <div className="div-container admin-btns">
      <Link to={`/admin/users`}>
        <button className="admin-btn">
          See all users
        </button>
      </Link>
      <Link to={`/admin/products`}>
        <button className="admin-btn">
          Edit a product
        </button>
      </Link>
      <Link to={`/products/add`}>
        <button className="admin-btn">
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

