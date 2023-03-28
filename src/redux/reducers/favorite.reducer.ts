import { FAVORITE } from '../actions/actionsType';

const INITIAL_STATE = {
  favoriteArray: [],
};

function favoriteReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case FAVORITE:
      return {
        ...state,
        favoriteArray: action.payload,
      };
    default:
      return state;
  }
}

export default favoriteReducer;
