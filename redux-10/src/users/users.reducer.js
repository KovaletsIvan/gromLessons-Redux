import { ADD_USER, DELETE_USER } from './users.actions';

const initState = { usersList: [] };

export const usersReducer = (state = initState, actions) => {
  switch (actions.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(actions.payload.user),
      };
    case DELETE_USER: {
      const newList = state.usersList.filter(
        (user) => user.id !== actions.payload.userId
      );
      return { ...state, usersList: newList };
    }
    default:
      return state;
  }
};
