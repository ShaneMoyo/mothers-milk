
import { USERS_LOAD, USER_LOAD, USER_ADD, USER_UPDATE, USER_DELETE } from './constants';
import usersApi from '../services/users-api';

export function loadUsers() {
  return async dispatch => {
    await dispatch({
      type: USERS_LOAD,
      payload: usersApi.get()
    });
  };
}

export function loadUserById(id) {
  return async dispatch => {
    await dispatch({
      type: USER_LOAD,
      payload: usersApi.get(id)
    });
  };
}

export function addUser(user) {
  return {
    type: USER_ADD,
    payload: usersApi.add(user)
  };
}

export function updateUser(user) {
  return {
    type: USER_UPDATE,
    payload: usersApi.update(user)
  };
}

export function deleteUser(id) {
  return {
    type: USER_DELETE,
    payload: usersApi.remove(id).then(() => id) // what is this??
  };
}