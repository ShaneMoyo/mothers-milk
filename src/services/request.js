import store from '../store/store';
import { API_URL } from './constants';

let headers = new Headers();
let token = '';

const storage = window.localStorage;

store.subscribe(() => {
  const { token: newToken } = store.getState().auth;
  if(newToken !== token) {
    token = newToken;
    token && headers.append('Authorization', token);
    token ? storage.token = token : storage.clear('token');
  }
});

export const getStoredToken = () => storage.token;

// const wrap = cmd => {
// };


export const request = {
  
  get(url) {
    return fetch(url, { 
      method:'GET',
      headers: headers,
    });
  }

};








