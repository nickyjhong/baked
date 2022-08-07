import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../store/allOrders";

export class UserProfile extends Component {
  // const { name, email, password } = props
  componentDidMount() {
    this.props.getOrders(this.props.match.params.id);
  }
  render() {
    console.log('this.props:', this.props);
    const { name } = this.props;
    const usersOrders = this.props.allOrders.orders || []
    return (
      <div className="user-profile">
        <div className="welcome">
          <span id="welcome-user">
            <h1>Welcome, {name}</h1>
            {/* <p>{email}</p>
            <p>{password}</p> */}
          </span>
          <p>PREVIOUS ORDERS BELOW</p>
          <div>
            {usersOrders.length ? (usersOrders.map(order => {
              return (
                order.status === 'closed' ? (
                  <div key={order.id}>
                    <ul>
                      {order.products.map(product => {
                        return (
                          <li key={product.id}>
                            {product.name}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ) : (
                  <div></div>
                )
              )
            })): (
              <div>I'm still loading</div>
            )}
          </div>
        </div>
        {/* <div className="edit-profile">
          <p>Edit profile</p>
          <UpdateUser />
        </div> */}
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  allOrders: state.orders,
  name: state.auth.name,
})

const mapDispatchToProps = (dispatch) => ({
  getOrders: (userId) => dispatch(fetchOrders(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
