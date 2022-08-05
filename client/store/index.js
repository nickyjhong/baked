import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import singleUserReducer from './singleUser'
import usersReducer from './allUsers'
import productsReducer from './allProducts'
import singleProductReducer from './singleProduct'
import ordersReducer from './allOrders'
import singleOrderReducer from './singleOrder'

const reducer = combineReducers({ 
  auth,
  users: usersReducer,
  orders: ordersReducer,
  products: productsReducer,
  singleUser: singleUserReducer,
  singleProduct: singleProductReducer,
  singleOrder: singleOrderReducer,

})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
