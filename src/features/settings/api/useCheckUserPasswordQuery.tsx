import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { CheckPassword } from '@src/shared/types/api/settings';

export const getCheckPassword = async (param: CheckPassword['param']) => {
  const res = await axios.get<CheckPassword['res']>(`/users/password`, {
    params: {
      password: param.password,
    },
  });
  return res.data;
};

const useCheckPasswordQuery = createQuery<CheckPassword['res'], CheckPassword['param']>({
  primaryKey: '/users/password',
  queryFn: ({ queryKey: [, param] }) => getCheckPassword(param),
  enabled: false,
});

export default useCheckPasswordQuery;
