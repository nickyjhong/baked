import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchOrder } from "../store/singleOrder";
import { fetchOrders } from "../store/allOrders";

export class Cart extends Component {

  componentDidMount() {
    this.props.getOrders(this.props.match.params.id);
  }

  render() {
    console.log('this.props: \n', this.props);
    
    const usersOrders = this.props.allOrders.orders || []

      return (
        <div>
          {usersOrders.length ? (usersOrders.map(order => {
            return (
              order.status === 'open' ? (
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
      )
    }
  }

const mapStateToProps = (reduxState) => ({
  allOrders: reduxState.orders
})

const mapDispatchToProps = (dispatch) => ({
  getOrders: (userId) => dispatch(fetchOrders(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
