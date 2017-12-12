import { USER_ADD, USER_DELETE, USER_LOAD, USER_UPDATE } from './constants';

export function users(state = null, { type, payload }) {
  switch(type) {

    case USER_LOAD: 
      return payload;

    default:
      return state;
  } 


}  