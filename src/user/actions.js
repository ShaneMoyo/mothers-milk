import { USER_LOAD } from './constants';
import usersApi from '../services/users-api';

export function loadUsers() {
  return async dispatch => {
    await dispatch({
      type: USER_LOAD,
      payload: usersApi.get()
    });
  };
}