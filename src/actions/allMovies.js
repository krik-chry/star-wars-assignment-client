import request from 'superagent';

export const ALL_MOVIES = 'ALL_MOVIES';

const baseUrl = 'https://star-wars-heightometer-server.herokuapp.com';

function allMovies(payload) {
  return {
    type: ALL_MOVIES,
    payload
  };
}

export const getMovies = () => dispatch => {
  request(`${baseUrl}/allFilms`)
    .then(response => {
      const action = allMovies(response.body);

      dispatch(action);
    })
    .catch(console.error);
};
