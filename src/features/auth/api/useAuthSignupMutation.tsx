import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { SignUp } from '@src/shared/types/api/auth';

const postAuthSignup = async (param: SignUp['param']) => {
  const res = await axios.post<SignUp['res']>('/auth/signup', param);
  return res.data;
};

const useAuthSignupMutation = (
  options?: UseMutationOptions<SignUp['res'], unknown, SignUp['param']>,
) => useMutation({ mutationFn: postAuthSignup, ...options });

export default useAuthSignupMutation;
