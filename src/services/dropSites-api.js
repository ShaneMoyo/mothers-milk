import api from './api';
const settings = {
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMzA0OWE5YjliNWJlMzlhNjQ4OTA2YyIsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTUxMzExNDE3Mn0.NfQ9Z-DeSopMDbSVthr5Z_31u-Ygy82KuKMNeSVBVw4'
  }
};

export default {
  get(id, options = {}) {
    const path = id ? `/dropSites/${id}` : '/dropSites';
    return api.get(path, { ...settings, ...options });
  },

  add(dropSite) {
    return api.post('/dropSites', dropSite);
  },

  update(dropSite) {
    return api.put(`/dropSites/${dropSite._id}`, dropSite);
  },

  remove(id) {
    return api.delete(`/dropSites/${id}`);
  }
};
