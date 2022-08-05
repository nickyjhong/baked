import axios from "axios";

// Action Types
const SET_ORDERS = "SET_ORDERS";

// Action Creators
export const _setOrders = (orders) => ({
  type: SET_ORDERS,
  orders,
});

// Thunk
export const fetchOrders = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/orders`);
      dispatch(_setOrders(data));
    } catch (err) {
      console.error(err);
    }
  };
};

// Reducer
const initialState = [];
export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders;
    default:
      return state;
  }
}
