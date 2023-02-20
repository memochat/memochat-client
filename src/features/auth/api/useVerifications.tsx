import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { VerifyEmail } from '@src/shared/types/api/auth';
import { authKeys } from '@src/shared/utils/queryKeys';

export const getAuthVerifications = async (param: VerifyEmail['param']) => {
  const res = await axios.get<VerifyEmail['res']>(`/auth/verifications/${param.email}`);
  return res.data;
};

const useVerificationsQuery = (
  email: string,
  options?: UseQueryOptions<
    VerifyEmail['res'],
    unknown,
    VerifyEmail['res'],
    [string, string, VerifyEmail['param']]
  >,
) =>
  useQuery({
    queryKey: authKeys.verification(email),
    enabled: false,
    queryFn: ({ queryKey: [, , param] }) => getAuthVerifications(param),
    ...options,
  });

export default useVerificationsQuery;
