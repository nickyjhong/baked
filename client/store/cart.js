import axios from "axios";

// ACTION TYPES
const SET_CART = "SET_CART";
const UPDATE_CART = "UPDATE_CART";
const UPDATED_QUANTITY = "UPDATED_QUANTITY"

// ACTION CREATORS
export const _setCart = (cart) => ({
  type: SET_CART,
  cart,
});

export const _updateCart = (cart) => ({
  type: UPDATE_CART,
  cart,
});

export const _updatedQuantity = (cartItem) => ({
  type: UPDATED_QUANTITY,
  cartItem
})

// THUNKS
export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");

      if (token) {
        const { data } = await axios.get("/api/cart", {
          headers: {
            authorization: token,
          },
        });
        await dispatch(_setCart(data));
      } else {
        const cart = JSON.parse(window.localStorage.getItem("cart"));
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
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data } = await axios.post(
          "/api/cart",
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

export const increaseQuantity = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/cart`)
      dispatch(_updatedQuantity(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const decreaseQuantity = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/cart`)
      dispatch(_updatedQuantity(data))
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
    case UPDATED_QUANTITY:
      return action.cartItem; //
    default:
      return state;
  }
}
