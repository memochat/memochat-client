import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { SendEmail } from '@src/shared/types/api/auth';
import axios from '@src/shared/configs/axios';

export const usePostSendEmailMutation = (
  options?: UseMutationOptions<AxiosResponse<SendEmail['res']>, unknown, SendEmail['param']>,
) =>
  useMutation({
    mutationFn: (data) => axios.post<SendEmail['res']>('/auth/send-email', data),
    ...options,
  });
