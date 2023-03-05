import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { ChangeNickName } from '@src/shared/types/api/settings';
import axios from '@src/shared/configs/axios';
import { MemoChatError } from '@src/shared/types/api';

export const patchChangeNicName = async (data: ChangeNickName['param']) => {
  const res = await axios.patch<ChangeNickName['res']>('/users/nickname', data);
  return res.data;
};

const usePatchNickNameChangeMutation = (
  options?: UseMutationOptions<ChangeNickName['res'], MemoChatError, ChangeNickName['param']>,
) => {
  return useMutation(patchChangeNicName, options);
};

export default usePatchNickNameChangeMutation;
