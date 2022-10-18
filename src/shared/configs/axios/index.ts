import Axios, { AxiosError } from 'axios';

import { getAccessToken } from '../cookie';

import { MemoChatError } from '@src/shared/types/api';

const axios = Axios.create({
  baseURL: 'https://memochat-server.herokuapp.com/v1',
});

axios.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.resolve(error),
);

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error instanceof AxiosError) {
      const { message, status } = error.response?.data;
      return Promise.reject(new MemoChatError(message, status));
    }
    return Promise.reject(error);
  },
);

export default axios;
