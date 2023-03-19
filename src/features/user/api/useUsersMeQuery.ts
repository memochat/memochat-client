import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { UsersMe } from '@src/shared/types/api/user';

export const getUsersMe = async () => {
  const res = await axios.get<UsersMe['res']>('/users/me');
  return res.data;
};

const useUsersMeQuery = createQuery({
  primaryKey: '/users/me',
  queryFn: getUsersMe,
});

export default useUsersMeQuery;
