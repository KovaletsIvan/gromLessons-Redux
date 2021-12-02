import { createStore, combineReducers } from 'redux';
import { lenguageReducer } from './lenguage.reducer';
import { cartReducer } from './cart.reducer';
import { usersReducer } from './user.reducer';

export const store = createStore(
  combineReducers({
    lenguage: lenguageReducer,
    cart: cartReducer,
    user: usersReducer,
    
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


