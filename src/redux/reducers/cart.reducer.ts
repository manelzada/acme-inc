import { CART } from '../actions/actionsType';

const INITIAL_STATE = {
  cartArray: [],
};

function cartReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case CART:
      return {
        ...state,
        cartArray: action.payload,
      };
    default:
      return state;
  }
}

export default cartReducer;
