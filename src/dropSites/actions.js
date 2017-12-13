import { DROPSITE_ADD, DROPSITE_DELETE, DROPSITES_LOAD, DROPSITE_UPDATE } from './constants';
import dropSitesApi from '../services/dropSites-api';

export function loadDropSites() {
  console.log('loading drop sites');
  return async dispatch => {
    await dispatch({
      type: DROPSITES_LOAD,
      payload: dropSitesApi.get()
    });
  };
}

export function addDropSite(dropSite) {
  return {
    type: DROPSITE_ADD,
    payload: dropSitesApi.add(dropSite)
  };
}

export function updateDropSite(dropSite) {
  return {
    type: DROPSITE_UPDATE,
    payload: dropSitesApi.update(dropSite)
  };
}

export function deleteDropSite(id) {
  return {
    type: DROPSITE_DELETE,
    payload: dropSitesApi.remove(id).then(() => id) // what is this??
  };
}