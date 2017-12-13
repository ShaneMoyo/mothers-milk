import api from './api';
const settings = {
  headers: {
    Authorization: ''
  }
};

export default {
  get(id, options = {}) {
    const path = id ? `/users/${id}` : '/users';
    return api.get(path, { ...settings, ...options });
  },

  add(user) {
    return api.post('/users', user);
  },

  update(user) {
    return api.put(`/users/${user._id}`, user);
  },

  remove(id) {
    return api.delete(`/users/${id}`);
  }
};

