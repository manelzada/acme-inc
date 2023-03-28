import { CART, FAVORITE } from './actionsType';

export const cartAction = (cart: any) => ({
  type: CART,
  payload: cart,
});

export const favoriteAction = (favoriteItem: any) => ({
  type: FAVORITE,
  payload: favoriteItem,
});
