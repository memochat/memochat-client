import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { User } from '@src/shared/types/user';
import { logError } from '@src/shared/utils/log';
import { UserSchema } from '@src/schema';

type Response = User;

export const getUsersMe = async () => {
  const res = await axios.get<Response>('/users/me');
  try {
    UserSchema.parse(res.data);
  } catch (e) {
    logError(e);
  }
  return res.data;
};

const useUsersMeQuery = createQuery<Response>({
  primaryKey: '/users/me',
  queryFn: getUsersMe,
});

export default useUsersMeQuery;
