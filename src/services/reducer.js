import { LOADING, DONE_LOADING, ERROR } from './constants';

export function loading (state = false, { type }) {
  switch (type) {
    case LOADING:
      return true;
    case DONE_LOADING:
    case ERROR:
      return false;
    default:
      return state;
  }
}

export function error (state = null, { type, payload }) {
  switch (type) {
    case ERROR:
      return payload;
    case LOADING:
      return null;
    default:
      return state;
  }
}