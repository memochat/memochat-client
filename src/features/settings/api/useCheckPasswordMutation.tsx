import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';

type Response = string;
type Variables = {
  password: string;
};

export const checkPassword = async (payload: Variables) => {
  const res = await axios.post<Response>(`/users/password`, payload);
  return res.data;
};

const useCheckPasswordMutation = createMutation<Response, Variables>({
  mutationFn: checkPassword,
});

export default useCheckPasswordMutation;
