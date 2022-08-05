import axios from "axios";

// Action type
const SET_PRODUCT = 'SET_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

// Action creator
export const _setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product
  }
}

const _updateProduct = product => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}

// Thunk creator
export const fetchProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`)
      dispatch(_setProduct(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateProduct = (id, update) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/products/${id}`, update);
      dispatch(_updateProduct(data));
    } catch (err) {
      console.log(err)
    }
  }
}


// Reducer
const initialState = {};
export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;
    case UPDATE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}

// increase/decrease
