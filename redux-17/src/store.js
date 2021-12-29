import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { wheatherReducer } from "./weather/weather.reducer";
import thunk from "redux-thunk";

const appReducers = combineReducers({
  wheather: wheatherReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  appReducers,
  composeEnhancers(applyMiddleware(thunk))
);
