
import { USER_ADD, USER_DELETE, USERS_LOAD, USER_UPDATE, USER_LOAD } from './constants';

export function users(state = {}, { type, payload }) {
  switch(type) {

    case USERS_LOAD: 
      return payload;
    case USER_LOAD:
      return payload;
    case USER_ADD:
      return [
        ...state,
        payload
      ];
    case USER_DELETE:
      return state.filter(user => user._id !== payload);
    case USER_UPDATE:
      return state.map(user => user._id === payload._id ? { ...user, ...payload } : user);
    default:
      return state;
  } 
}  