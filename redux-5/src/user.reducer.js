import { ADDUSER, DELETEUSER } from './users.actions';

const initialState = { usersList: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {...state, userList: state.usersList.push(action.payload) };
    case DELETEUSER:
      return { 
        userList: state.usersList.filter(elem=>elem.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
