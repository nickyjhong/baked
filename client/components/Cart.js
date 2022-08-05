import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrder } from "../store/singleOrder";
// import { fetchOrders } from "../store/allOrders";

export class Cart extends Component {

  componentDidMount() {
    this.props.getOrder(this.props.match.params.id);
  }

  render() {
    console.log('this.props: \n', this.props.getOrder());
    
    const usersOrders = this.props.allOrders.orders || []
    if (usersOrders === false) {
      return (
        <div>
          loading
        </div>
      )
    } else {
      return (
        <div>
          {usersOrders.length ? (usersOrders.map(order => {
            return (
              <div key={order.id}>
                <ol>
                  {order.products.map(product => {
                    return (
                      <li key={product.id}>
                        {product.name}
                      </li>
                    )
                  })}
                </ol>
              </div>
            )
          })): (
            <div>I'm still loading</div>
          )}
        </div>
      )
    }

    // return (
    //   <>
    //     <div className="shopping-cart-title">
    //       <h1>Shopping Cart</h1>
    //     </div>
    //     <div className="parent-container">
    //       <div className="product-list"></div>
    //       <div className="cart-total"></div>
    //     </div>
    //   </>
    // );
  }
}

const mapStateToProps = (reduxState) => ({
  allOrders: reduxState.orders
})

const mapDispatchToProps = (dispatch) => ({
  fetchOrder: () => dispatch(fetchOrder()),
  getOrder: (userId) => dispatch(fetchOrder(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
