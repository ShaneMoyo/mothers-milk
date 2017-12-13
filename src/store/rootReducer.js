import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import { dropSites } from '../dropSites/reducer';
import { error, loading } from '../services/reducer';

export default combineReducers({
  auth,
  dropSites,
  error,
  loading
});