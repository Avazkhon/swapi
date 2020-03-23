import {
  GET_FILMS,
} from '../constants';

export function getFilms() {
  return (dispatch) => dispatch({
    type: GET_FILMS,
    meta: {
      endpoint: 'films',
    },
  });
}
