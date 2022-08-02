import axios from "axios";

// Action type
const CREATE_USER = 'CREATE_USER';
const SET_USERS = 'SET_USERS';

// Action creators
export const _createUser = (name) => {
  return {
    type: CREATE_USER,
    name,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

// Thunks
export const createUser = (user, history) => {
  return async (dispatch) => {
    const { data: token } = await axios.post('/api/users', user);
    window.localStorage.setItem('token', token);
    dispatch(_createUser(user));
    history.push('/');
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/users');
      dispatch(setUsers(data));
    } catch (err) {
      console.log(err);
    }
  };
};


// Reducer
const initialState = [];

export default function createUserReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return action.name;
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
}