import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { ChangePassword } from '@src/shared/types/api/settings';
import axios from '@src/shared/configs/axios';
import { MemoChatError } from '@src/shared/types/api';

export const pathChangePassword = async (data: ChangePassword['param']) => {
  const res = await axios.patch<ChangePassword['res']>('/users/password', data);
  return res.data;
};

const usePatchChangePasswordMutation = (
  options?: UseMutationOptions<ChangePassword['res'], MemoChatError, ChangePassword['param']>,
) => {
  return useMutation(pathChangePassword, options);
};

export default usePatchChangePasswordMutation;
