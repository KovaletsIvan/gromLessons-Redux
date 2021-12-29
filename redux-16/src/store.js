import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { usersReducer } from "./users.reducer";
import thunk from "redux-thunk";

const appReducers = combineReducers({
  users: usersReducer,
});

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("nex state", store.getState());
  console.groupEnd();
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  appReducers,
  composeEnhancers(applyMiddleware(thunk, logger))
);
