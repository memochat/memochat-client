import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { SendEmail } from '@src/shared/types/api/auth';
import axios from '@src/shared/configs/axios';

export const postAuthEmails = async (data: SendEmail['param']) => {
  const res = await axios.post<SendEmail['res']>('/auth/emails', data);
  return res.data;
};

const usePostSendEmailMutation = (
  options?: UseMutationOptions<SendEmail['res'], unknown, SendEmail['param']>,
) => useMutation(postAuthEmails, options);

export default usePostSendEmailMutation;
