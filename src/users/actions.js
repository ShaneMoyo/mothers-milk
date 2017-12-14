import { DROPSITE_ADD, DROPSITE_DELETE, DROPSITES_LOAD, DROPSITE_UPDATE } from './constants';
import dropSitesApi from '../services/dropSites-api';

export function loadDropSites() {
  return dispatch => {
    dispatch({
      type: DROPSITES_LOAD,
      payload: dropSitesApi.get()
    });
  };
}

export function addDropSite(dropSite) {
  return dispatch => {
    dispatch({
      type: DROPSITE_ADD,
      payload: dropSitesApi.add(dropSite)
    });
  };
}


export function updateDropSite(dropSite) {
  return dispatch => {
    dispatch({
      type: DROPSITE_UPDATE,
      payload: dropSitesApi.update(dropSite)
    });
  };
}

export function deleteDropSite(id) {
  return dispatch => {
    dispatch({
      type: DROPSITE_DELETE,
      payload: dropSitesApi.remove(id).then(() => id) 
    });
  };
}