import axios from 'axios'

// ACTION TYPES
const SET_PRODUCT = 'SET_PRODUCT'


// ACTION CREATORS 
export const _setProduct = (product) => ({
  type: SET_PRODUCT,
  product
});


// THUNKS
export const fetchProduct = (id) => async (dispatch) =>{
  const {data} = await axios.get(`/api/products/${id}`)
  dispatch(_setProduct(data));
}

// REDUCER
const initialState = {}

export default function singleProductReducer (state = initialState, action) {
  switch(action.type){
    case SET_PRODUCT: 
      return action.product
    default:
      return state
  }
}
