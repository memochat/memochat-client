import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { ChangeNickName } from '@src/shared/types/api/settings';
import { MemoChatError } from '@src/shared/types/api';

export const patchChangeNicName = async (data: ChangeNickName['param']) => {
  const res = await axios.patch<ChangeNickName['res']>('/users/nickname', data);
  return res.data;
};

const usePatchNickNameChangeMutation = createMutation<
  ChangeNickName['res'],
  ChangeNickName['param'],
  MemoChatError
>({
  mutationFn: patchChangeNicName,
});

export default usePatchNickNameChangeMutation;
