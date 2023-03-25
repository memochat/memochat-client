import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';

type Response = string;
type Variables = { email: string };

export const getAuthVerifications = async (payload: Variables) => {
  const res = await axios.get<Response>(`/auth/verifications/${payload.email}`);
  return res.data;
};

const useVerificationsQuery = createQuery<Response, Variables>({
  primaryKey: '/auth/verifications',
  enabled: false,
  queryFn: ({ queryKey: [, variables] }) => getAuthVerifications(variables),
});

export default useVerificationsQuery;
