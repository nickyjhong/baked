import axios from "axios";

// Action type
const SET_ORDER = 'SET_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';

// Action creator
export const _setOrder = (order) => {
  return {
    type: SET_ORDER,
    order
  }
}

const _updateOrder = order => {
  return {
    type: UPDATE_ORDER,
    order
  }
}

// Thunk creator
export const fetchOrder = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/cart`)
      dispatch(_setOrder(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateOrder = (userId, update) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/users/${userId}/cart`, update);
      dispatch(_updateOrder(data));
    } catch (err) {
      console.log(err)
    }
  }
}

// SET INITIAL STATE
const initialState = {};

// REDUCER
export default function singleOrderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER:
      return action.order;
    case UPDATE_ORDER:
      return action.order;
    default:
      return state;
  }
}