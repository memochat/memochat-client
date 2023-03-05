import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { SignIn } from '@src/shared/types/api/auth';
import axios from '@src/shared/configs/axios';
import { MemoChatError } from '@src/shared/types/api';

export const postAuthSignin = async (data: SignIn['param']) => {
  const res = await axios.post<SignIn['res']>('/auth/signin', data);
  return res.data;
};

const usePostSignInMutation = (
  options?: UseMutationOptions<SignIn['res'], MemoChatError, SignIn['param'], unknown>,
) => useMutation(postAuthSignin, options);

export default usePostSignInMutation;
