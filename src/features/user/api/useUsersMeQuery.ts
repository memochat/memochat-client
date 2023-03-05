import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { UsersMe } from '@src/shared/types/api/user';
import { getUsersMeKey } from '@src/shared/utils/queryKeys';

export const getUsersMe = async () => {
  const res = await axios.get<UsersMe['res']>('/users/me');
  return res.data;
};

const useUsersMeQuery = (options?: UseQueryOptions<UsersMe['res'], unknown>) =>
  useQuery(options?.queryKey ?? getUsersMeKey(), getUsersMe, options);

export default useUsersMeQuery;
