import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';

type Response = string;
type Variables = { email: string };

export const sendEmails = async (payload: Variables) => {
  const res = await axios.post<Response>('/auth/emails', payload);
  return res.data;
};

const useSendEmailMutation = createMutation<Response, Variables>({
  mutationFn: sendEmails,
});

export default useSendEmailMutation;
