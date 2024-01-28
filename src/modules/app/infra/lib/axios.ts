import axios from 'axios';

export const BASE_URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1';

export const api = axios.create({
  baseURL: BASE_URL,
});
