// eslint-disable-next-line no-restricted-imports
import Axios, { AxiosError, AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';

import isServer from '@src/shared/utils/isServer';
import { BaseRes, MemoChatError } from '@src/shared/types/api';

import { accessTokenName, getAccessToken } from '../cookie';

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

let serverSideCookies: GetServerSidePropsContext['req']['cookies'];

export const setServerSideCookies = (cookies: GetServerSidePropsContext['req']['cookies']) => {
  serverSideCookies = cookies;
};

axios.interceptors.request.use(
  (config) => {
    const accessToken = isServer() ? serverSideCookies[accessTokenName] : getAccessToken();
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
  (res: AxiosResponse<BaseRes<unknown>>) =>
    ({
      ...res,
      data: res.data.data,
    } as AxiosResponse<unknown>),
  (error) => {
    if (error instanceof AxiosError) {
      if (error.response?.data) {
        const { message, status } = error.response?.data;
        return Promise.reject(new MemoChatError(message, status, error.config.url));
      }
      return Promise.reject(new MemoChatError(error.message, error.status, error.config.url));
    }
    return Promise.reject(error);
  },
);

export default axios;
