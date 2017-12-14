import * as actions from './constants';
import donationApi from '../services/donation-api';
import io from 'socket.io-client';

export function loadDonations() {
  return dispatch => {
    dispatch({
      type: actions.LOAD_DONATIONS,
      payload: donationApi.get()
    });

    // const { protocol, host } = window.location;

    // const socket = new WebSocket(`${protocol === 'https:' ? 'wss' : 'ws'}://${host}/socket`);

    const socket = io({
      path: '/socket'
    });

    socket.on('newDonation', donation => {
      console.log(donation);
      dispatch({
        type: actions.ADD_DONATION,
        payload: donation
      });
    });



  
  };
}

export function loadMyDonations() {
  return dispatch => {
    dispatch({
      type: actions.LOAD_DONATIONS,
      payload: donationApi.getMy()
    });
  };
}

export function addDonation(donation) {
  return dispatch => {
    dispatch({
      type: actions.ADD_DONATION,
      payload: donationApi.add(donation)
    });
  };
}

export function updateDonation(donation) {
  return dispatch => {
    dispatch({
      type: actions.UPDATE_DONATION,
      payload: donationApi.update(donation)
    });
  };
}

export function deleteDonation(id) {
  return dispatch => {
    dispatch({
      type: actions.DELETE_DONATION,
      payload: donationApi.remove(id).then(() => id)
    });
  };
}
