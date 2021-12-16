import { createStore, combineReducers } from "redux";
import { optionsReducer } from "./options.reducer";

const appReducers = combineReducers({
  options: optionsReducer,
});

export const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
