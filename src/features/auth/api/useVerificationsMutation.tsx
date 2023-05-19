import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';

type Response = string;
type Variables = { email: string };

export const getAuthVerifications = async (payload: Variables) => {
  const res = await axios.get<Response>(`/auth/verifications/${payload.email}`);
  return res.data;
};

const useVerificationsMutation = createMutation<Response, Variables>({
  mutationFn: getAuthVerifications,
});

export default useVerificationsMutation;
