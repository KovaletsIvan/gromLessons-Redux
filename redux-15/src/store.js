import { createStore, combineReducers, applyMiddleware, compose } from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  appReducers,
  composeEnhancers(applyMiddleware(logger))
);
