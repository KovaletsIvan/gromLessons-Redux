import { createStore, combineReducers } from "redux";
import { usersReducer } from "./users.reducer";

const appReducers = combineReducers({
  users: usersReducer,
});

export const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
