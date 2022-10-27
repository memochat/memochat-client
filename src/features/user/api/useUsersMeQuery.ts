import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import axios from '@src/shared/configs/axios';
import { UsersMe } from '@src/shared/types/api/user';

export const getUsersMe = () => axios.get<UsersMe['res']>('/users/me');

const useUsersMeQuery = (options?: UseQueryOptions<AxiosResponse<UsersMe['res']>, unknown>) =>
  useQuery(options?.queryKey ?? ['users/me'], getUsersMe, options);

export default useUsersMeQuery;
