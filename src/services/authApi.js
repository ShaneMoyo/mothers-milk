import { request } from './request';

export default { 
  verify() {
    return request.get('/auth/verify');
  },
  signin(credentials){
    console.log('signed in, credentials: ', credentials);
    return request.post('/auth/signin', credentials);
  },
  getUser(id){
    return request.get(`/users/${id}`);
  }
};