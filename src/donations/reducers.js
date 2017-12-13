import * as actions from './constants';

export default function donations(state = [], { type, payload }) {
  switch(type) {
    case actions.LOAD_DONATION: 
      return payload;
    case actions.ADD_DONATION:
      return [
        ...state,
        payload
      ];
    case actions.DELETE_DONATION:
      return state.filter(donation => donation._id !== payload);
    case actions.UPDATE_DONATION:
      return state.map(donation => donation._id === payload._id ? { ...donation, ...payload } : donation);
    default:
      return state;
  } 
}  