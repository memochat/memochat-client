import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { VerifyEmail } from '@src/shared/types/api/auth';

export const getAuthVerifications = async (param: VerifyEmail['param']) => {
  const res = await axios.get<VerifyEmail['res']>(`/auth/verifications/${param.email}`);
  return res.data;
};

const useVerificationsQuery = (
  param: VerifyEmail['param'],
  options?: UseQueryOptions<VerifyEmail['res'], unknown>,
) => useQuery(options?.queryKey ?? ['users/me'], () => getAuthVerifications(param), options);

export default useVerificationsQuery;
