import axios from "axios";

// Action type
const SET_PRODUCTS = "SET_PRODUCTS";
const CREATE_PRODUCT = 'CREATE_PRODUCT';
// const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

// Action creator
const _createProduct = product => {
  return {
    type: CREATE_PRODUCT,
    product
  }
}


const _deleteProduct = product => {
  return {
    type: DELETE_PRODUCT,
    product
  }
}


// THUNK CREATORS
export const createProduct = (product, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/products', product);
    dispatch(_createProduct(created));
    history.push('/products')
  }
}


export const deleteProduct = (id, history) => {
  return async (dispatch) => {
    const { data: product } = await axios.delete(`/api/products/${id}`);
    dispatch(_deleteProduct(product));
    history.push('/products')
  }
}

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export const fetchProducts = () => async (dispatch) => {
  const { data } = await axios.get("/api/products");
  dispatch(setProducts(data));
};


const initialState = [];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case CREATE_PRODUCT:
      return [...state, action.product]
    // case UPDATE_PRODUCT:
    //   return action.campus
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id);
    default:
      return state;
  }
}
