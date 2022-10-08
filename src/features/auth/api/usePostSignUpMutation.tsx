import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { SignUp } from '@src/shared/types/api/auth';
import axios from '@src/shared/configs/axios';

export const usePostSignUpMutation = (
  options?: UseMutationOptions<AxiosResponse<SignUp['res']>, unknown, SignUp['param']>,
) =>
  useMutation({
    mutationFn: (data) => axios.post<SignUp['res']>('/auth/signup', data),
    ...options,
  });
