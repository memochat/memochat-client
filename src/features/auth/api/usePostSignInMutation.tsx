import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { SignIn } from '@src/shared/types/api/auth';
import axios from '@src/shared/configs/axios';

export const usePostSignInMutation = (
  options?: UseMutationOptions<AxiosResponse<SignIn['res']>, unknown, SignIn['param'], unknown>,
) =>
  useMutation({
    mutationFn: (data) => axios.post<SignIn['res']>('/auth/signin', data),
    ...options,
  });
