import { SHOW_SPINNER, USER_DATA_RECIVED } from "./users.actions";

const initState = { userData: null, isFetching: false };

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, isFetching: true };
    case USER_DATA_RECIVED:
      return { ...state, isFetching: false, userData: action.payload.userData };
    default:
      return state;
  }
};
