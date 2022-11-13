import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { SignUp } from '@src/shared/types/api/auth';
import axios from '@src/shared/configs/axios';

export const postAuthSignup = async (data: SignUp['param']) => {
  const res = await axios.post<SignUp['res']>('/auth/signup', data);
  return res.data;
};

const usePostSignUpMutation = (
  options?: UseMutationOptions<SignUp['res'], unknown, SignUp['param']>,
) => useMutation(postAuthSignup, options);

export default usePostSignUpMutation;
