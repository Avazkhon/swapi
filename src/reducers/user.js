import {
  createReducer,
  createRequestReducer,
} from 'utils';
import {
  GET_USER,
} from '../constants';


const initState = {
  isFetching: false,
  data: null,
  error: null,
};

export default createReducer(initState, {
  [GET_USER]: (_state, _action) => createRequestReducer(_state, _action, {
    SEND: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    SUCCESS: (state, action) => ({
      ...state,
      error: null,
      isFetching: false,
      data: action.response,
    }),
    FAIL: (state, action) => ({
      ...state,
      data: null,
      isFetching: false,
      error: action.error,
    }),
  }),
});
