import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';

type Response = string;
type Variables = { email: string; password: string };

export const signUp = async (payload: Variables) => {
  const res = await axios.post<Response>('/auth/signup', payload);
  return res.data;
};

const useSignUpMutation = createMutation<Response, Variables>({
  mutationFn: signUp,
});

export default useSignUpMutation;
