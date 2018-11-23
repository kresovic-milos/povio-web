export default {
  cacheAge: 5 * 60 * 1000, // 5min
  timeout: 3 * 1000, // 3s
  retryCount: 2,
  retryRequests: true,
  baseURL: process.env.API_URL
};
