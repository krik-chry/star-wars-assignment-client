import { combineReducers } from 'redux';

import allMovies from './allMovies';
import movieData from './movieData';
import messages from './messages';

export default combineReducers({
  allMovies,
  movieData,
  messages
});
