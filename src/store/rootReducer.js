import { combineReducers } from 'redux';

import { users } from '../user/reducer';
// import { error, loading } from '../app/reducer';


export default combineReducers({
  users
});