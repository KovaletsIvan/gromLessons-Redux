import { createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./counter.reducer";

const appReducers = combineReducers({
  counter: counterReducer,
});

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("nex state", store.getState());
  console.groupEnd();
};

export const store = createStore(
  appReducers,
  applyMiddleware(logger)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
