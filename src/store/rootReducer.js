import { combineReducers } from 'redux';

import { users } from '../user/reducer';
import { error, loading } from '../services/reducer';


export default combineReducers({
  users,
  error,
  loading
});