import axios from 'axios';

export const uploadData = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post('http://localhost:5000/api/upload', formData);
};

export const getData = () => {
  return axios.get('http://localhost:5000/api/data').then((response) => response.data);
};

export const processData = () => {
  return axios.post('http://localhost:5000/api/process');
};