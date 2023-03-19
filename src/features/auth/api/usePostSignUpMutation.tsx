import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { SignUp } from '@src/shared/types/api/auth';

export const postAuthSignup = async (data: SignUp['param']) => {
  const res = await axios.post<SignUp['res']>('/auth/signup', data);
  return res.data;
};

const usePostSignUpMutation = createMutation<SignUp['res'], SignUp['param']>({
  mutationFn: postAuthSignup,
});

export default usePostSignUpMutation;
