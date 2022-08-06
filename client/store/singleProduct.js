import axios from "axios";

// Action type
const SET_PRODUCT = 'SET_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

// Action creator
export const setProduct = (product) => {
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
      dispatch(setProduct(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateProduct = (product, id) => {
  return async (dispatch) => {
    console.log('product: \n', product);
    console.log('id: \n', id);
    try {
      const { data: updated } = await axios.put(`/api/products/${product.id}`, product);
      dispatch(_updateProduct(updated, product));
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
      return { ...action.product, product: action.product };
    default:
      return state;
  }
}

// increase/decrease
