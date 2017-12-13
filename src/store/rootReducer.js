import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import { dropSites } from '../dropSites/reducer';
import donations from '../donations/reducer';
import { error, loading } from '../services/reducer';

export default combineReducers({
  auth,
  donations,
  dropSites,
  error,
  loading
});