import axios from "axios";

// Action type
// const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";


const SET_PRODUCT = 'SET_PRODUCT'
// Action creator
// export const _getSingleProduct = (product) => ({
//   type: GET_SINGLE_PRODUCT,
//   product,
// });

export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product
  }
}

// Thunk creator
// export const getSingleProduct = (product) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/api/products/${product.id}`);
//     dispatch(_getSingleProduct(data));
//   } catch (err) {
//     console.log(err);
//   }
// };

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

// Reducer
const initialState = {};
export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;
    default:
      return state;
  }
}

// increase/decrease
