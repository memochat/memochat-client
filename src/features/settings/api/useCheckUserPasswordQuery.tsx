import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { MemoChatError } from '@src/shared/types/api';
import { CheckPassword } from '@src/shared/types/api/settings';
import { checkPasswordKeys } from '@src/shared/utils/queryKeys';

export const getCheckPassword = async (param: CheckPassword['param']) => {
  const res = await axios.get<CheckPassword['res']>(`/users/password`, {
    params: {
      password: param.password,
    },
  });
  return res.data;
};

const useCheckPasswordQuery = (
  password?: string,
  options?: UseQueryOptions<
    CheckPassword['res'],
    MemoChatError,
    CheckPassword['res'],
    [string, CheckPassword['param']]
  >,
) =>
  useQuery({
    queryKey: checkPasswordKeys({ password }),
    enabled: false,
    queryFn: ({ queryKey: [, { password }] }) => getCheckPassword({ password }),
    ...options,
  });

export default useCheckPasswordQuery;
