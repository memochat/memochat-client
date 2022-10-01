import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import axios from '@src/shared/configs/axios';
import { SendEmail, SignIn, SignUp } from '@src/types/api/auth';

export const useSendEmailMutation = (
  options?: UseMutationOptions<AxiosResponse<SendEmail['res']>, unknown, SendEmail['param']>,
) =>
  useMutation({
    mutationFn: (data) => axios.post<SendEmail['res']>('/auth/send-email', data),
    ...options,
  });

export const useSignInMutation = (
  options?: UseMutationOptions<AxiosResponse<SignIn['res']>, unknown, SignIn['param'], unknown>,
) =>
  useMutation({
    mutationFn: (data) => axios.post<SignIn['res']>('/auth/signin', data),
    ...options,
  });

export const useSignUpMutation = (
  options?: UseMutationOptions<AxiosResponse<SignUp['res']>, unknown, SignUp['param']>,
) =>
  useMutation({
    mutationFn: (data) => axios.post<SignUp['res']>('/auth/signup', data),
    ...options,
  });
