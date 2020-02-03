import request from 'superagent';

export const MOVIE_DATA = 'MOVIE_DATA';
export const CLEAR_CHARACTERS = 'CLEAR_CHARACTERS';
export const MESSAGE = 'MESSAGE';

const baseUrl = 'https://star-wars-heightometer-server.herokuapp.com';

function movieData(payload) {
  return {
    type: MOVIE_DATA,
    payload
  };
}

function clearCharacters(payload) {
  return {
    type: CLEAR_CHARACTERS,
    payload
  };
}
function getServerMessage(payload) {
  return {
    type: MESSAGE,
    payload
  };
}
export const clearMessage = () => dispatch => {
  const action = {
    type: 'CLEAR_MESSAGE',
    payload: ''
  };
  dispatch(action);
};

export const getCharacters = (id, order) => dispatch => {
  const loadingAction = clearCharacters({ loading: true });
  dispatch(loadingAction);

  request(`${baseUrl}/search/${id}/${order}`)
    .then(response => {
      const action = movieData(response.body);
      dispatch(action);
    })
    .catch(error => {
      const loadingAction = clearCharacters({ loading: false });
      dispatch(loadingAction);
      const messageAction = getServerMessage(error.response.body.message);
      dispatch(messageAction);
    });
};
