import axios from 'axios';

// ACTION TYPES
const SET_CART = 'SET_CART';
const UPDATE_CART = 'UPDATE_CART'

// ACTION CREATORS
export const _setCart = (cart) => ({
  type: SET_CART,
  cart,
});

export const _updateCart = (cart) =>({
  type: UPDATE_CART,
  cart,
})
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
      const token = window.localStorage.getItem('token')
      if (token) {
        const { data } = await axios.post('/api/cart', {
          productId: product.id
        }, {
          headers: {
            authorization: token
          }
        })
        dispatch(_updateCart(data))
      } 
    } catch (err) {
      console.log(err)
    }
  }
}

// REDUCER
const initialState = {};

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
