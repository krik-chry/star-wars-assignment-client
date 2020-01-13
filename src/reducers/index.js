import { combineReducers } from 'redux';

import allMovies from './allMovies';
import movieCharacters from './movieCharacters';
import messages from './messages';

export default combineReducers({
  allMovies,
  movieCharacters,
  messages
});
