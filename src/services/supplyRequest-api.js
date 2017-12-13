import { request } from './request';

export default {
  get(id){
    const path = id ? `/donations/${id}` : '/donations';
    return request.get(path);
  },
}