import { MOVIE_CHARACTERS, CLEAR_CHARACTERS } from '../actions/movieCharacters';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case MOVIE_CHARACTERS:
      return action.payload;
    case CLEAR_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
}
