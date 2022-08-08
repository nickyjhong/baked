import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCart, increaseQuantity, decreaseQuantity } from '../store/cart';
import { Link } from 'react-router-dom'

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
    this.props.increaseQuantity(this.props.match.params.id);
  }

  decrease() {
    this.props.decreaseQuantity(this.props.match.params.id);
  }

  render() {
    console.log('this.props: \n', this.props)
    return (
      <div>
        {this.props.cart !== null && this.props.cart.products
          ? this.props.cart.products.map((product) => (
            <div key={product.id} className="cart-container">
              {console.log('product: \n', product)}
              <hr /> {/* To differentiate order until we have css for it*/}
              <p> Baked Good: {product.name} </p>
              <img src={product.imageUrl}/> {/* Change to imageURL to see image*/}
              <p> Price: ${product.price / 100}</p>
              <span><button type="button" onClick={this.decrease}>-</button></span>
              <span>Quantity: {product.quantity}</span>
              <span><button type="button" onClick={this.increase}>+</button></span>
              <br />
              <button type="button">Remove</button>
              <br />
            </div>
          )
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
  increaseQuantity: (userId) => dispatch(increaseQuantity(userId)),
  decreaseQuantity: (userId) => dispatch(decreaseQuantity(userId)),
});

export default connect(mapState, mapDispatch)(Cart);
