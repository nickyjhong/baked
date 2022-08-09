import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateQuantity,
  deleteFromCart,
  fetchCart,
  _updateCart,
} from '../store/cart';

class Cart extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  handleDelete(productId) {
    this.props.deleteFromCart(productId);
    alert('deleted from cart ' + productId);
  }

  render() {
    console.log('props', this.props.cart);
    return (
      <div>
        {this.props.cart !== null && this.props.cart.products ? (
          this.props.cart.products.map((product) => (
            <div key={product.id} className="cart-container">
              <p> -----------------------</p>{' '}
              {/* To differentiate order until we have css for it*/}
              <p> Baked Good: {product.name} </p>
              <img src={product.imageUrl} />{' '}
              {/* Change to imageURL to see image*/}
              <p> Price: ${product.price / 100}</p>
              <button
                type="button"
                onClick={() => this.handleDelete(product.id)}
              >
                Delete from Cart
              </button>
            </div>
          ))
        ) : (
          <p> Empty cart </p>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
});

const mapDispatch = (dispatch) => ({
  fetchCart: () => dispatch(fetchCart()),
  deleteFromCart: (productId) => dispatch(deleteFromCart(productId)),
  updateCart: (quantityChanged) => dispatch(updateQuantity(quantityChanged)),
});

export default connect(mapState, mapDispatch)(Cart);
