import axios from "axios";
import { me } from './auth'

// Action type
const UPDATE_USER = 'UPDATE_USER'
const SET_USER = 'SET_USER';

// Action creators

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  }
}

// Thunks
// export const createUser = (user, history) => {
//   return async (dispatch) => {
//     const { data: token } = await axios.post('/api/users', user);
//     window.localStorage.setItem('token', token);
//     dispatch(_createUser(user));
//     dispatch(me())
//     history.push('/');
//   };
// };

export const fetchUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      dispatch(setUser(data));
    } catch (err) {
      console.log(err);
    }
  };
};


export const updateUser = (id, update) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/users/${id}`, update)
      dispatch(_updateUser(data))
    } catch (err) {
      console.log(err)
    }
  }
}

// Reducer
const initialState = {};

export default function singleUserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}