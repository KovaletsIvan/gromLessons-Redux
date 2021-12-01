import { createStore, combineReducers } from 'redux';
import userReducer from './user.reducer';
import { counterReducer } from './counter.reducer';

const appReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

export default createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
