import { ADDUSER, DELETEUSER } from './users.actions';

const initialState = { usersList: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.obj),
      };
    case DELETEUSER: {
      const newList = state.usersList.filter(
        (elem) => elem.id !== action.payload.id
      );
      return {
        ...state,
        usersList: newList,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
