import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { SignIn } from '@src/shared/types/api/auth';
import { MemoChatError } from '@src/shared/types/api';

export const postAuthSignin = async (data: SignIn['param']) => {
  const res = await axios.post<SignIn['res']>('/auth/signin', data);
  return res.data;
};

const usePostSignInMutation = createMutation<SignIn['res'], SignIn['param'], MemoChatError>({
  mutationFn: postAuthSignin,
});

export default usePostSignInMutation;
