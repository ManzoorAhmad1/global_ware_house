import axios from 'axios';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Add any custom headers
    config.headers['X-App-Version'] = '1.0.0';
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Transform response data if needed
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with error
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // Unauthorized - redirect to login
          console.error('Unauthorized access');
          // window.location.href = '/login';
          break;
        case 403:
          console.error('Forbidden access');
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Server error');
          break;
        default:
          console.error('An error occurred:', data.message || 'Unknown error');
      }
    } else if (error.request) {
      // Request made but no response
      console.error('No response from server');
    } else {
      // Error in request setup
      console.error('Error setting up request:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// API Methods
export const api = {
  // Products
  getProducts: async () => {
    const response = await axiosInstance.get('/products');
    return response.data;
  },
  
  getProductById: async (id: string) => {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  },
  
  getProductsByCategory: async (category: string) => {
    const response = await axiosInstance.get(`/products?category=${category}`);
    return response.data;
  },
  
  // Orders
  createOrder: async (orderData: any) => {
    const response = await axiosInstance.post('/orders', orderData);
    return response.data;
  },
  
  getOrders: async () => {
    const response = await axiosInstance.get('/orders');
    return response.data;
  },
  
  // User
  login: async (credentials: { email: string; password: string }) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  },
  
  register: async (userData: any) => {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  },
  
  // Contact
  submitContactForm: async (formData: any) => {
    const response = await axiosInstance.post('/contact', formData);
    return response.data;
  },
};

export default axiosInstance;
