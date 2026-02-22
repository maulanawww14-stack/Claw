import axios from 'axios';

// Instance untuk API Backend Utama (Mock)
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Instance untuk API Trading (Real-time di server)
export const tradingApi = axios.create({
  baseURL: 'http://10.0.0.1:3001/api/trading',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor untuk API Utama
api.interceptors.request.use(
  (config) => {
    const authData = localStorage.getItem('auth-storage');
    if (authData) {
      const { state } = JSON.parse(authData);
      if (state.token) {
        config.headers.Authorization = `Bearer ${state.token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
