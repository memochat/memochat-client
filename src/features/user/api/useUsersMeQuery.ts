import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { UsersMe } from '@src/shared/types/api/user';

export const getUsersMe = async () => {
  const res = await axios.get<UsersMe['res']>('/users/me');
  return res.data;
};

export const getUsersMeQueryKey = () => ['users/me'];

const useUsersMeQuery = (options?: UseQueryOptions<UsersMe['res'], unknown>) =>
  useQuery(options?.queryKey ?? getUsersMeQueryKey(), getUsersMe, options);

export default useUsersMeQuery;
