import { INCREMENT, DECREMENT, RESET } from "./counter.actions";

const initState = 0;

export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return state + 1;
    }
    case DECREMENT: {
      return state - 1;
    }
    case RESET: {
      return (state = 0);
    }
    default:
      return state;
  }
};
