const url = '/api';

const wrap = async promise => {
  const response = await promise;
  if(response.ok) return response.json();

  const contentType = response.headers.get('content-type');

  const error = contentType && contentType.startsWith('application/json') 
    ? await response.json() 
    : await response.text();

  throw error;
};

export default {
  get(path) {
    return wrap(
      fetch(`${url}${path}`)
    );
  }
};