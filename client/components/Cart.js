import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../store/cart';

class Cart extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    return (
      <div>
        {this.props.cart !== null && this.props.cart.products ? (
          this.props.cart.products.map((product) => (
            <div key={product.id}>
              <p> -----------------------</p>
              <p> Product Name: {product.name} </p>
              <img src={product.imageUrl} />{' '}
              {/* Change to imageURL to see image*/}
        {this.props.cart !== null && this.props.cart.products
        ? this.props.cart.products.map((product) => (
          <div key={product.id} className="cart-container">
              <p> -----------------------</p> {/* To differentiate order until we have css for it*/}
              <p> Baked Good: {product.name} </p>
              <img src={product.imageUrl}/> {/* Change to imageURL to see image*/}
              <p> Price: ${product.price / 100}</p>
            </div>
          ))
        ) : (
          <p> I'm still loading </p>
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
});

export default connect(mapState, mapDispatch)(Cart);
