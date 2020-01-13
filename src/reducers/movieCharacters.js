import { MOVIE_CHARACTERS } from '../actions/movieCharacters';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case MOVIE_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
}
