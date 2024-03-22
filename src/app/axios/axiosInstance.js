import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.zumo.asia',
});
const setToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export { axiosInstance, setToken };