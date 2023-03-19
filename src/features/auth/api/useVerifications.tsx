import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { VerifyEmail } from '@src/shared/types/api/auth';

export const getAuthVerifications = async (param: VerifyEmail['param']) => {
  const res = await axios.get<VerifyEmail['res']>(`/auth/verifications/${param.email}`);
  return res.data;
};

const useVerificationsQuery = createQuery<VerifyEmail['res'], VerifyEmail['param']>({
  primaryKey: '/auth/verifications',
  enabled: false,
  queryFn: ({ queryKey: [, param] }) => getAuthVerifications(param),
});

export default useVerificationsQuery;
