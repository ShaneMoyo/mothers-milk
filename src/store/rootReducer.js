import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import { users } from '../user/reducer';
import { error, loading } from '../services/reducer';


export default combineReducers({
  users,
  auth,
  error,
  loading
});