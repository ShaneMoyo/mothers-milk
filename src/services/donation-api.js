import { request } from './request';

export default {
  get(id) {
    const path = id ? `/donations/${id}` : '/donations';
    return request.get(path);
  },

  add(donation) {
    return request.post('/donations', donation);
  },

  update(donation) {
    return request.update(`/donations/${donation._id}`, donation);
  },

  remove(id) {
    console.log('iiiiidddddddddddddddd', id);
    return request.delete(`/donations/${id}`);
  }
};
