import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { MemoChatError } from '@src/shared/types/api';

type Response = {
  accessToken: string;
  refreshToken: string;
  userId: number;
};
type Variables = { email: string; password: string };

export const signin = async (payload: Variables) => {
  const res = await axios.post<Response>('/auth/signin', payload);
  return res.data;
};

const useSignInMutation = createMutation<Response, Variables, MemoChatError>({
  mutationFn: signin,
});

export default useSignInMutation;
