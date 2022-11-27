import Axios, { AxiosError, AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';

import { accessTokenName, getAccessToken } from '../cookie';

import isServer from '@src/shared/utils/isServer';
import { BaseRes, MemoChatError } from '@src/shared/types/api';

const axios = Axios.create({
  baseURL: 'https://memochat-server.herokuapp.com/v1',
});

let serverSideCookies: GetServerSidePropsContext['req']['cookies'];

export const setServerSideToken = (cookies: GetServerSidePropsContext['req']['cookies']) => {
  serverSideCookies = cookies;
};

axios.interceptors.request.use(
  (config) => {
    if (isServer()) {
      const serverAccessToken = serverSideCookies[accessTokenName];
      if (serverAccessToken) {
        config.headers = {
          Authorization: `Bearer ${serverAccessToken}`,
        };
      } else {
        delete config.headers.Authorization;
      }
    } else {
      const accessToken = getAccessToken();
      if (accessToken) {
        config.headers = {
          Authorization: `Bearer ${accessToken}`,
        };
      } else {
        delete config.headers.Authorization;
      }
    }
    return config;
  },
  (error) => Promise.resolve(error),
);

axios.interceptors.response.use(
  (res: AxiosResponse<BaseRes<unknown>>) =>
    ({
      ...res,
      data: res.data.data,
    } as AxiosResponse<unknown>),
  (error) => {
    if (error instanceof AxiosError) {
      const { message, status } = error.response?.data;
      return Promise.reject(new MemoChatError(message, status, error.config.url));
    }
    return Promise.reject(error);
  },
);

export default axios;
