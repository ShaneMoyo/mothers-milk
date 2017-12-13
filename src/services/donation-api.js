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
    return request.put(`/donations/${donation._id}`, donation);
  },

  remove(id) {
    return request.delete(`/donations/${id}`);
  }
};
