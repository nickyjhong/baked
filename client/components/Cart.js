import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteFromCart,
  fetchCart,
  _updateCart,
  updateQuantity,
} from '../store/cart';
import { Link } from 'react-router-dom';

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
    const cartItemProps = this.props.cart.products || [];
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Shopping Cart</h2>
        <div className="cart-container div-container">
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
                <div className="subtotal-inline-block"></div>
              </div>
              {this.props.cart !== null && this.props.cart.products ? (
                this.props.cart.products.map((product) => (
                  <div key={product.id} className="checkout-card-row">
                    <div className="subtotal-inline-block">{product.name}</div>
                    <img src={product.imageUrl} />{' '}
                    {/* Change to imageURL to see image*/}
                    <div className="quantity-section">
                      <button
                        className="increment-btn"
                        onClick={() => this.props.updateCart(product, -1)}
                      >
                        -
                      </button>
                      <div className="subtotal-inline-block">
                        {product.cartItem.quantity}
                      </div>
                      <button
                        className="increment-btn"
                        onClick={() => this.props.updateCart(product, 1)}
                      >
                        +
                      </button>
                    </div>
                    <div
                      className="subtotal-inline-block"
                      style={{ marginRight: '1rem' }}
                    >
                      $ {product.price / 100}
                    </div>
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => this.handleDelete(product.id)}
                    >
                      delete
                    </button>
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
                <div className="subtotal-inline-block">
                  {this.props.cart !== null && this.props.cart.products
                    ? `$ ${parseFloat(
                        this.props.cart.products.reduce((prev, curr) => {
                          let calculatedPrice =
                            (curr.price * curr.cartItem.quantity) / 100;
                          return prev + calculatedPrice;
                        }, 0)
                      ).toFixed(2)}`
                    : '$ 0'}
                </div>
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
                <div className="subtotal-inline-block">
                  {this.props.cart !== null && this.props.cart.products
                    ? `$ ${parseFloat(
                        this.props.cart.products.reduce((prev, curr) => {
                          let calculatedPrice =
                            (curr.price * curr.cartItem.quantity) / 100;
                          return prev + calculatedPrice;
                        }, 0) + 2.99
                      ).toFixed(2)}`
                    : '$ 2.99'}
                </div>
              </div>
              <div className="checkout-card-row">
                <Link to="/checkout">
                  <button className="checkout-btn">Proceed To Checkout</button>
                </Link>
              </div>
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





// {productFilter.map((product) => {
//   const displayPrice = parseFloat(product.price / 100).toFixed(2)
//   // console.log(product.name.toLowerCase().includes(this.state.term.toLowerCase()))
//   return (

//   )



  // {product.name.toLowerCase().includes(this.state.term.toLowerCase()) ? (
      // <div className="grid-item" key={product.id}>
      //   <Link to={`/products/${product.id}`} >
      //     <img
      //       className="shop-image"
      //       src={product.imageURL}
      //       alt={`Image of ${product.name}`}
      //     />
      //   </Link>
      //   <div className="cookie-description">
      //     <h3 className="grid-item-text">{product.name}</h3>
      //     <p className="grid-item-text">${displayPrice}</p>
      //     <div className="shop-btn-container">
      //       <Link to={`/products/${product.id}`}>
      //         <button className='view-more-btn shop-btn'>View More</button>
      //       </Link>
      //       <button className='add-to-cart shop-btn' onClick={() => {this.props.addToCart(product); alert('added to cart') }}>Add To Cart</button>
      //     </div>
      //   </div>
      // </div>
  //     <div>Hello</div>
  // ) : (
      // <div className="grid-item" key={product.id}>
      //   <Link to={`/products/${product.id}`} >
      //     <img
      //       className="shop-image"
      //       src={product.imageURL}
      //       alt={`Image of ${product.name}`}
      //     />
      //   </Link>
      //   <div className="cookie-description">
      //     <h3 className="grid-item-text">{product.name}</h3>
      //     <p className="grid-item-text">${displayPrice}</p>
      //     <div className="shop-btn-container">
      //       <Link to={`/products/${product.id}`}>
      //         <button className='view-more-btn shop-btn'>View More</button>
      //       </Link>
      //       <button className='add-to-cart shop-btn' onClick={() => {this.props.addToCart(product); alert('added to cart') }}>Add To Cart</button>
      //     </div>
      //   </div>
      // </div>
//   )}
// })}

{/* {productFilter.map((product) => {
              const displayPrice = parseFloat(product.price / 100).toFixed(2) 
              return (
                <div className="grid-item" key={product.id}>
                  <Link to={`/products/${product.id}`} >
                    <img
                      className="shop-image"
                      src={product.imageURL}
                      alt={`Image of ${product.name}`}
                    />
                  </Link>
                  <div className="cookie-description">
                    <h3 className="grid-item-text">{product.name}</h3>
                    <p className="grid-item-text">${displayPrice}</p>
                    <div className="shop-btn-container">
                      <Link to={`/products/${product.id}`}>
                        <button className='view-more-btn shop-btn'>View More</button>
                      </Link>
                      <button className='add-to-cart shop-btn' onClick={() => {this.props.addToCart(product); alert('added to cart') }}>Add To Cart</button>
                    </div>
                  </div>
                </div>
              );
            })} */}
              // const displayPrice = parseFloat(product.price / 100).toFixed(2)