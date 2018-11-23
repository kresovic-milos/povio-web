const APP_PREFIX = 'REACT_APP_';

export const API_URL = process.env[`${APP_PREFIX}API_URL`];

export const HTTP_RETRY_COUNT = Number(process.env[`${APP_PREFIX}HTTP_RETRY_COUNT`]);
export const HTTP_RETRY_REQUESTS = Boolean(process.env[`${APP_PREFIX}HTTP_RETRY_REQUESTS`]);
export const HTTP_TIMEOUT = Number(process.env[`${APP_PREFIX}HTTP_TIMEOUT`]);
export const HTTP_CACHE_AGE_IN_MINUTES = Number(
  process.env[`${APP_PREFIX}HTTP_CACHE_AGE_IN_MINUTES`]
);

export const SIGNUP_PATH = `${API_URL}/auth/signup`;
export const LOGIN_PATH = `${API_URL}/auth/login`;
export const MOST_LIKED_PATH = `${API_URL}/users/most-liked`;
export const USER_PATH = userId => `${API_URL}/users/${userId}`;
export const LIKE_PATH = userId => `${API_URL}/users/${userId}/like`;
export const UNLIKE_PATH = userId => `${API_URL}/users/${userId}/unlike`;
