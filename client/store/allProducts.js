import axios from 'axios';

// Action type
const SET_PRODUCTS = 'SET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
// const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const FETCH_PRODUCT_TYPE = 'FETCH_PRODUCT_TYPE';

// Action creator

export const _setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

const _createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product,
  };
};

const _deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product,
  };
};

// const _fetchProductType = (product) => {
//   return {
//     type: FETCH_PRODUCT_TYPE,
//     product,
//   };
// };

// THUNK CREATORS
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/products');
      dispatch(_setProducts(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const createProduct = (product, history) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post('/api/products', product);
      dispatch(_createProduct(created));
      history.push('/products');
    } catch (err) {
      console.error(err);
    }
  };
};

export const deleteProduct = (id, history) => {
  return async (dispatch) => {
    try {
      const { data: product } = await axios.delete(`/api/products/${id}`);
      dispatch(_deleteProduct(product));
      history.push('/products');
    } catch (err) {
      console.error(err);
    }
  };
};

// export const deleteProduct = (product, history) => {
//   return async (dispatch) => {
//     try {
//       const { data: deleted } = await axios.delete(`/api/products/${product.id}`);
//       dispatch(_deleteProduct(product));
//       history.push('/products');
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };


// export const fetchProductType = (categoryName) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(
//         `/api/products/category/${categoryName}`
//       );
//       dispatch(_fetchProductType(data));
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };

const initialState = [];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case CREATE_PRODUCT:
      return [...state, action.product];
    // case UPDATE_PRODUCT:
    //   return action.campus
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id);
    // case FETCH_PRODUCT_TYPE:
    //   return action.product;
    default:
      return state;
  }
}
