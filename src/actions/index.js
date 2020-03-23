import {
  GET_FILMS,
  GET_USER,
} from '../constants';

export function getFilms() {
  return (dispatch) => dispatch({
    type: GET_FILMS,
    meta: {
      endpoint: 'films',
    },
  });
}

export function getUser(id) {
  return (dispatch) => dispatch({
    type: GET_USER,
    meta: {
      endpoint: `people/${id}`,
    },
  });
}
