import request from 'superagent';

export const ALL_MOVIES = 'ALL_MOVIES';

const baseUrl = 'http://localhost:4000';

function allMovies(payload) {
  return {
    type: ALL_MOVIES,
    payload
  };
}

export const getMovies = () => dispatch => {
  request(`${baseUrl}/allFilms`)
    .then(response => {
      console.log(response);
      const action = allMovies(response.body);

      dispatch(action);
    })
    .catch(console.error);
};
