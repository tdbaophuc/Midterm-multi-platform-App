export const API_URL = 'http://192.168.1.48:5050'; 

export const endpoints = {
  login: '/api/users/login',
  register: '/api/users/register',
  getAllUsers: '/api/users',
  updateUser: (id) => `/api/users/${id}`,
  deleteUser: (id) => `/api/users/${id}`,
};