import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { ChangePassword } from '@src/shared/types/api/settings';

export const pathChangePassword = async (data: ChangePassword['param']) => {
  const res = await axios.patch<ChangePassword['res']>('/users/password', data);
  return res.data;
};

const usePatchChangePasswordMutation = createMutation<
  ChangePassword['res'],
  ChangePassword['param']
>({
  mutationFn: pathChangePassword,
});

export default usePatchChangePasswordMutation;
