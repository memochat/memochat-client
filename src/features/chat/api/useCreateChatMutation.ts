import { createMutation } from 'react-query-kit';

import useChatsQuery from '@src/features/chat/api/useChatsQuery';
import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';
import { CreateChat } from '@src/shared/types/api/chat';

export const createChat = async ({
  roomId,
  param,
}: {
  roomId: number;
  param: CreateChat['param'];
}) => {
  const res = await axios.post<CreateChat['res']>(`/rooms/${roomId}/chats`, param);
  return res.data;
};

const useCreateChatMutation = createMutation<
  CreateChat['res'],
  { roomId: number; param: CreateChat['param'] }
>({
  mutationFn: createChat,
  onSuccess: () => {
    queryClient.invalidateQueries(useChatsQuery.getKey());
  },
});

export default useCreateChatMutation;
