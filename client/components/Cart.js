import React from 'react';

const Cart = () => {
  return (
    <React.Fragment>
      <div className="shopping-cart-title">
        <h1>Shopping Cart</h1>
      </div>
      <div className="parent-container">
        <div className="product-list"></div>
        <div className="cart-total"></div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
