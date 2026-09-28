import axios from 'axios';

// Change REACT_APP_API_URL in .env to switch between local and live backends.
const API_BASE_URL = (
  process.env.REACT_APP_API_URL || 'https://service-portal-2dhu.onrender.com'
).replace(/\/$/, '');

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { API_BASE_URL };
export default api;
