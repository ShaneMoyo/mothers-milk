import { request } from './request';

export default { 
  verify() {
    return request.get('/auth/verify');
  },
  signin(credentials){
    return request.post('/auth/signin', credentials);
  },
  getUser(id){
    return request.get(`/users/${id}`);
  }
};