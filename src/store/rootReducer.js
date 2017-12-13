import { combineReducers } from 'redux';
import { users } from '../user/reducer';
import { dropSites } from '../dropSites/reducer';
import { error, loading } from '../services/reducer';


export default combineReducers({
  users,
  dropSites,
  error,
  loading
});