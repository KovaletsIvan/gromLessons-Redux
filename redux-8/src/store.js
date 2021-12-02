import { createStore, combineReducers } from 'redux';
import { languageReducer } from './language.reducer';
import { cartReducer } from './cart.reducer';
import { usersReducer } from './user.reducer';

export const store = createStore(
  combineReducers({
    language: languageReducer,
    cart: cartReducer,
    user: usersReducer,
    
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


