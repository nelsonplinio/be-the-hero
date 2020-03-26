import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config) => {
  const id = localStorage.getItem('ongID');
  if (id) {
    config.headers.Authorization = id;
  }
  return config;
});

export default api;
