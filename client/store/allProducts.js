import axios from "axios";

// ACTION TYPES
const SET_PRODUCTS = 'SET_PRODUCTS'

// ACTION CREATORS
export const _setProducts = (products) => ({
    type: SET_PRODUCTS,
    products
  });

// THUNKS
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
    const {data} = await axios.get('/api/products')
    dispatch(_setProducts(data))
    } catch (error) {
      console.error(error)
    }
  }
};

// REDUCER
const initialState = []

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state

  }
}