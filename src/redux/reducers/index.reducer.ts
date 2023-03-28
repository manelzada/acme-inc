import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from './cart.reducer';
import favoriteReducer from './favorite.reducer';

const rootReducer = combineReducers({
  cartReducer,
  favoriteReducer,
});

export default rootReducer;
