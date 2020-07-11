import axios from 'axios';
import { API_BASE_URL } from './app.config';

/**
 * HTTP 客户端
 */
export const http = axios.create({
  baseURL: API_BASE_URL,
});
