import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { SendEmail } from '@src/shared/types/api/auth';
import axios from '@src/shared/configs/axios';

export const postAuthEmails = (data: SendEmail['param']) =>
  axios.post<SendEmail['res']>('/auth/emails', data);

const usePostSendEmailMutation = (
  options?: UseMutationOptions<AxiosResponse<SendEmail['res']>, unknown, SendEmail['param']>,
) =>
  useMutation({
    mutationFn: postAuthEmails,
    ...options,
  });

export default usePostSendEmailMutation;
