import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../store/allOrders";

export class Cart extends Component {

  componentDidMount() {
    this.props.getOrders(this.props.match.params.id);
  }

  render() {
    console.log('this.props: \n', this.props);
    return (
      <>
        <div className="shopping-cart-title">
          <h1>Shopping Cart</h1>
        </div>
        <div className="parent-container">
          <div className="product-list"></div>
          <div className="cart-total"></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  orders: reduxState.orders
})

const mapDispatchToProps = (dispatch) => ({
  getOrders: (userId) => dispatch(fetchOrders(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
