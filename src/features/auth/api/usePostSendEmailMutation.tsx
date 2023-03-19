import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { SendEmail } from '@src/shared/types/api/auth';

export const postAuthEmails = async (data: SendEmail['param']) => {
  const res = await axios.post<SendEmail['res']>('/auth/emails', data);
  return res.data;
};

const usePostSendEmailMutation = createMutation<SendEmail['res'], SendEmail['param']>({
  mutationFn: postAuthEmails,
});

export default usePostSendEmailMutation;
