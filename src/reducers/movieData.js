import { MOVIE_DATA, CLEAR_CHARACTERS } from '../actions/movieData';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case MOVIE_DATA:
      return { ...action.payload };
    case CLEAR_CHARACTERS:
      return { ...action.payload };
    default:
      return state;
  }
}
