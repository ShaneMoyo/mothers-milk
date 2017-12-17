import * as actions from './constants';
import supplyRequestApi from '../services/supplyRequest-api';

export function loadSupplyRequest() {
  return dispatch => {
    dispatch({ 
      type: actions.LOAD_SUPPLIES,
      payload: supplyRequestApi.get()
    });
  };
}

export function requestSupply(supply) {
  return dispatch => {
    dispatch({
      type: actions.REQUEST_SUPPLIES,
      payload: supplyRequestApi.add(supply)
    });
  };
}

export function updateSupplyRequest(supply) {
  return dispatch => {
    dispatch({
      type: actions.UPDATE_SUPPLY,
      payload: supplyRequestApi.update(supply)
    });
  };
}

export function deleteSupplyRequest(id) {
  return dispatch => {
    dispatch({
      type: actions.DELETE_SUPPLY,
      payload: supplyRequestApi.remove(id).then(() => id)
    });
  };
}