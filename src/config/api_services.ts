import axios from 'axios';
import ENV from '@/config/env';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Set up a global Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: ENV.API_URL,
});
// Interceptor to set the Authorization header with the token
axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('tokenLogin');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;

