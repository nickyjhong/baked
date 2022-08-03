import axios from "axios";

// Action creator
const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";

// Action creator
export const _getSingleProduct = (product) => ({
  type: GET_SINGLE_PRODUCT,
  product,
});

// Thunk creator
export const getSingleProduct = (product) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${product.id}`);
    dispatch(_getSingleProduct(data));
  } catch (err) {
    console.log(err);
  }
};

// Reducer
const initialState = [];
export function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}

// increase/decrease
