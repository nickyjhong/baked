import axios from 'axios';

// ACTION TYPES
const SET_CART = 'SET_CART';

// ACTION CREATORS
export const _setCart = (cart) => ({
  type: SET_CART,
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

// REDUCER
const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    default:
      return state;
  }
}
