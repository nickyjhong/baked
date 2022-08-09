import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCart, increaseQuantity, decreaseQuantity } from "../store/cart";
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor() {
    super();
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  componentDidMount() {
    this.props.fetchCart();
  }

  increase() {
    // this.props.increaseQuantity(this.props.cart.products);
    console.log(`this.props.cart.products in increase: \n`, this.props.cart.products) // gives an array of objects [ {}, {}, {} ]
        // index of the array is related to the productId (i.e. array[0] = products/4)
    // this.props.cart.products.quantity or [0]
  }

  decrease() {
    this.props.decreaseQuantity(this.props.match.params.id);
  }

  render() {
    // console.log("this.props: \n", this.props); // fetchCart, increaseQuantity, decreaseQuantity <-- what is put into mapDispatch
    // console.log("this.props.cart: \n", this.props.cart); // id, products, status, totalPrice, userId
    return (
      <div>
        <section className="grid-section">Cart</section>
        {this.props.cart !== null && this.props.cart.products ? (
          this.props.cart.products.map((product) => (
            <div key={product.id} className="cart-container">
              <Link to={`/products/${product.id}`}>
              <img src={product.imageURL} className="cart-image" />
              <br />
              {product.name}
              <br />
              </Link>
              <p> Price: ${product.price / 100}</p>
              <span>
                <button type="button" onClick={this.decrease}>
                  -
                </button>
              </span>
              <span> Quantity: {product.cartItem.quantity} </span>
              <span>
                <button type="button" onClick={this.increase}>
                  +
                </button>
              </span>
              <br />
              <button type="button">Remove</button>
              <br />
              <br />
              <hr /> {/* To differentiate order until we have css for it*/}
              <br />
            </div>
          ))
        ) : (
          <p>Cart loading...</p>
        )}
        <p>Total: {'PLACEHOLDER FOR TOTAL'}</p>
        <Link to="/checkout">
          <button type="submit">Checkout</button>
        </Link>
        <br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
});

const mapDispatch = (dispatch) => ({
  fetchCart: () => dispatch(fetchCart()),
  increaseQuantity: () => dispatch(increaseQuantity()),
  decreaseQuantity: () => dispatch(decreaseQuantity()),
});

export default connect(mapState, mapDispatch)(Cart);
