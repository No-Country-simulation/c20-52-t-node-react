// src/services/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.DATABASE_URL || 'https://c20-52-t-node-react.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
