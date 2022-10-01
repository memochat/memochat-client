import Axios, { AxiosError } from 'axios';

import { MemoChatError } from '@src/types/api/base';

const axios = Axios.create({ baseURL: 'https://memochat-server.herokuapp.com/v1' });

axios.interceptors.request.use(
  (config) => config,
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
