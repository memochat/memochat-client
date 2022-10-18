import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { SignIn } from '@src/shared/types/api/auth';
import axios from '@src/shared/configs/axios';

export const postAuthSignin = (data: SignIn['param']) =>
  axios.post<SignIn['res']>('/auth/signin', data);

const usePostSignInMutation = (
  options?: UseMutationOptions<AxiosResponse<SignIn['res']>, unknown, SignIn['param'], unknown>,
) =>
  useMutation({
    mutationFn: postAuthSignin,
    ...options,
  });

export default usePostSignInMutation;
