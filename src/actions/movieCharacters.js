import request from 'superagent';

export const MOVIE_CHARACTERS = 'MOVIE_CHARACTERS';
export const MESSAGE = 'MESSAGE';

const baseUrl = 'http://localhost:4000';

function movieCharacters(payload) {
  return {
    type: MOVIE_CHARACTERS,
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
  request(`${baseUrl}/search/${id}/${order}`)
    // .then(response => Promise.all(response))
    .then(response => {
      const action = movieCharacters(response.body);
      dispatch(action);
    })
    .catch(error => {
      const action = getServerMessage(error.response.body.message);
      dispatch(action);
    });
};
