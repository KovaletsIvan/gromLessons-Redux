import { ADD_USER, DELETE_USER } from './users.actions';

const initState = { users: [] };

export const usersReducer = (state = initState, actions) => {
  switch (actions.type) {
    case ADD_USER:
      return { ...state, users: state.users.concat(actions.payload.user) };
    case DELETE_USER: {
      const newList = state.users.filter(
        (user) => user.id !== actions.payload.userId
      );
      return { ...state, users: newList };
    }
    default:
      return state;
  }
};
