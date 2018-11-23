/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
import LocalStorage from '../LocalStorage';

export default config => {
  config.headers['Authorization'] = `Bearer ${LocalStorage.get('token')}`;

  return config;
};
