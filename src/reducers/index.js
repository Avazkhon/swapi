import { combineReducers } from 'redux';
import films from './films';
import user from './user';

export default combineReducers({
  films,
  user,
});
