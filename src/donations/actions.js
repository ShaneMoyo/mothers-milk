import * as actions from './constants';
import donationApi from '../services/donation-api';
import { getStoredToken } from '../services/request';

export function loadDonations() {
  return dispatch => {
    dispatch({
      type: actions.LOAD_DONATOINS,
      payload: donationApi.get()
    });
  };
}

export function addDonation(donation) {
  return dispatch => {
    dispatch({
      type: DONATION_ADD,
      payload: donationApi.add(donation)
    });
};