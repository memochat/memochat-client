import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';

type Response = string;
type Variables = {
  password: string;
};

export const updatePassword = async (payload: Variables) => {
  const res = await axios.patch<Response>('/users/password', payload);
  return res.data;
};

const useUpdatePasswordMutation = createMutation<Response, Variables>({
  mutationFn: updatePassword,
});

export default useUpdatePasswordMutation;
