import request from 'superagent';

export const MOVIE_CHARACTERS = 'MOVIE_CHARACTERS';
export const CLEAR_CHARACTERS = 'CLEAR_CHARACTERS';
export const MESSAGE = 'MESSAGE';

const baseUrl = 'http://localhost:4000';

function movieCharacters(payload) {
  return {
    type: MOVIE_CHARACTERS,
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
  const action = clearCharacters({ loading: true });
  dispatch(action);
  request(`${baseUrl}/search/${id}/${order}`)
    .then(response => {
      const action = movieCharacters(response.body);
      dispatch(action);
    })
    .catch(error => {
      console.error(error);
      const action = getServerMessage(error.response.body.message);
      dispatch(action);
    });
};
