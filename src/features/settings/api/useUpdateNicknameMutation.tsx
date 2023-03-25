import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { MemoChatError } from '@src/shared/types/api';

type Response = string;
type Variables = {
  nickname: string;
};

export const updateNickname = async (payload: Variables) => {
  const res = await axios.patch<Response>('/users/nickname', payload);
  return res.data;
};

const useUpdateNicknameMutation = createMutation<Response, Variables, MemoChatError>({
  mutationFn: updateNickname,
});

export default useUpdateNicknameMutation;
