import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { SignIn } from '@src/shared/types/api/auth';
import axios from '@src/shared/configs/axios';

export const postAuthSignin = async (data: SignIn['param']) => {
  const res = await axios.post<SignIn['res']>('/auth/signin', data);
  return res.data;
};

const usePostSignInMutation = (
  options?: UseMutationOptions<SignIn['res'], unknown, SignIn['param'], unknown>,
) => useMutation(postAuthSignin, options);

export default usePostSignInMutation;
