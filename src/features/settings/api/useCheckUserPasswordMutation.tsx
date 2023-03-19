import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { CheckPassword } from '@src/shared/types/api/settings';

export const postCheckPassword = async (param: CheckPassword['param']) => {
  const res = await axios.post<CheckPassword['res']>(`/users/password`, {
    password: param.password,
  });
  return res.data;
};

const useCheckPasswordMutation = createMutation({
  mutationFn: postCheckPassword,
});

export default useCheckPasswordMutation;
