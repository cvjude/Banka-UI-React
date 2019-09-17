import { combineReducers } from 'redux';
import userObject from './User';
import toasts from './toast';

export default combineReducers({
  userObject,
  toasts,
});
