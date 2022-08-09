import axios from 'axios';

// ACTION TYPES
const SET_CART = 'SET_CART';
const UPDATE_CART = 'UPDATE_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// ACTION CREATORS
export const _setCart = (cart) => ({
  type: SET_CART,
  cart,
});

export const _updateCart = (cart) => ({
  type: UPDATE_CART,
  cart,
});

export const _increaseQuantity = (cart) => ({
  type: UPDATE_QUANTITY,
  cart,
});

// THUNKS
export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');

      if (token) {
        const { data } = await axios.get('/api/cart', {
          headers: {
            authorization: token,
          },
        });
        await dispatch(_setCart(data));
      } else {
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        await dispatch(_setCart(cart));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const addToCart = (product) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { data } = await axios.post(
          '/api/cart',
          {
            productId: product.id,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(_updateCart(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteFromCart = (productId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { data } = await axios.delete(`/api/cart/${productId}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(_updateCart(data));
      } else {
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        console.log(cart);
        const remainingProducts = cart.products.filter(
          (product) => product.cartItems.productId !== productId
        );
        const newCart = { ...cart, products: remainingProducts };
        window.localStorage.setItem('cart', JSON.stringify(newCart));
        dispatch(_updateCart(newCart));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateQuantity = (product, quantityChanged) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { data } = await axios.put(
          '/api/cart',
          {
            productId: product.id,
            quantity: quantityChanged,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log(data);
        dispatch(_updateCart(data));
      } else {
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        for (let i = 0; i < cart.products.length; i++) {
          if (cart.products[i].cartItem.productId === productId) {
            if (cart.products[i].cartItem.quantity + quantityChanged <= 0)
              return;
            cart.products[i].cartItem.quantity =
              cart.products[i].cartItem.quantity + quantityChanged;
            cart.products[i].cartItem.unitPrice =
              cart.products[i].cartItem.unitPrice +
              quantityChanged * cart.products[i].price;
          }
        }
        window.localStorage.setItem('cart', JSON.stringify(cart));
        dispatch(_updateCart(cart));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// REDUCER
const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case UPDATE_CART:
      return action.cart;
    default:
      return state;
  }
}
