import { ADD_USER, REMOVE_USER } from './user.actions';

const initialStateUsers = null;

export const usersReducer = (state = initialStateUsers, action) => {
  switch (action.type) {
    case ADD_USER:
      return (state = action.payload.userData);
    case REMOVE_USER:
      return (state = initialStateUsers);
    default:
      return state;
  }
};
