import axios from 'axios';
import 

// Action types
// const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

// Action creators
// export const _getCart = (cart) => ({
//   type: GET_CART,
//   cart,
// });

export const _addToCart = (cartItem) => ({
  type: ADD_TO_CART,
  cartItem,
});

export const _deleteFromCart = (cartItem) => ({
  type: DELETE_FROM_CART,
  cartItem,
});

// Thunk
// export const fetchCart = (userId) => {
//   return async (dispatch) => {
//     try {
//       const { data: cart } = await axios.get(`/api/users/${userId}/cart`);
//       dispatch(_getCart(cart));
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };

export const addToCart = (userId, quantity) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/users/${userId}/cart`, {
        userId: userId,
        quantity: quantity,
      });
      dispatch();
    } catch (err) {
      console.error(err);
    }
  };
};

const initialState = [];
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    default:
      return state;
  }
}
