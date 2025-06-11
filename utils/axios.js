import axios from "axios";

// Axios Interceptor Instance
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://tadaautos.com',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    // Add token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;