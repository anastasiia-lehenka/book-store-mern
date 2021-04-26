import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import booksReducer from './books/reducer';
import cartReducer from './cart/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
  cart: cartReducer,
});

export default rootReducer;
