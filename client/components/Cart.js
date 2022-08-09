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
      <div className="cart-container">
        <div className="cart-section-left">
          <div className="shopping-cart-left-container">
            <div className="checkout-card-row">
              <div
                className="subtotal-inline-block"
                style={{ fontWeight: 'bold' }}
              >
                Product
              </div>
              <div
                className="subtotal-inline-block"
                style={{ fontWeight: 'bold' }}
              >
                Quantity
              </div>
              <div
                className="subtotal-inline-block"
                style={{ fontWeight: 'bold' }}
              >
                Price
              </div>
            </div>

            {this.props.cart !== null && this.props.cart.products ? (
              this.props.cart.products.map((product) => (
                <div key={product.id} className="checkout-card-row">
                  <div className="subtotal-inline-block">{product.name}</div>
                  <img src={product.imageUrl} />{' '}
                  {/* Change to imageURL to see image*/}
                  <p> Price: ${product.price / 100}</p>
                  <p> Quantity: {product.cartItem.quantity}</p>
                  <button onClick={() => this.props.updateCart(product, 1)}>
                    {' '}
                    +{' '}
                  </button>
                  <button onClick={() => this.props.updateCart(product, -1)}>
                    {' '}
                    -{' '}
                  </button>
                  <div className="subtotal-inline-block">1</div>
                  <div className="subtotal-inline-block">
                    $ {product.price / 100}
                  </div>
                  {/* <button
                type="button"
                onClick={() => this.handleDelete(product.id)}
              >
                Delete from Cart
              </button> */}
                </div>
              ))
            ) : (
              <p> Empty cart </p>
            )}
          </div>
        </div>
        <div className="cart-section-right">
          <div className="cart-card-right">
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '1rem 2rem',
              }}
            >
              Cart Totals
            </span>
            <div className="checkout-card-row">
              <div
                className="subtotal-inline-block"
                style={{ fontWeight: 'bold' }}
              >
                Subtotal
              </div>
              <div className="subtotal-inline-block">#REF</div>
            </div>
            <div className="checkout-card-row">
              <div
                className="subtotal-inline-block"
                style={{ fontWeight: 'bold' }}
              >
                Shipping
              </div>
              <div className="subtotal-inline-block">$ 2.99</div>
            </div>
            <div className="checkout-card-row">
              <div
                className="subtotal-inline-block"
                style={{ fontWeight: 'bold' }}
              >
                Total
              </div>
              <div className="subtotal-inline-block">#REF</div>
            </div>
            <div className="checkout-card-row">
              <button></button>
            </div>
          </div>
        </div>
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
  updateCart: (product, newQuantity) =>
    dispatch(updateQuantity(product, newQuantity)),
});

export default connect(mapState, mapDispatch)(Cart);
