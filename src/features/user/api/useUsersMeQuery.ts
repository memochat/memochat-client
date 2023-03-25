import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { User } from '@src/shared/types/user';

type Response = User;

export const getUsersMe = async () => {
  const res = await axios.get<Response>('/users/me');
  return res.data;
};

const useUsersMeQuery = createQuery<Response>({
  primaryKey: '/users/me',
  queryFn: getUsersMe,
});

export default useUsersMeQuery;
