import { createMutation } from 'react-query-kit';

import useChatsInfiniteQuery from '@src/features/chat/api/useChatsInfiniteQuery';
import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';
import { ChatType } from '@src/shared/types/chat';

type Response = string;
type Variables = {
  roomId: number;
  chatId: number;

  type: ChatType;
  message: string;
  link: string;
};

export const updateChat = async ({ roomId, chatId, ...reqBody }: Variables) => {
  const res = await axios.patch<Response>(`/rooms/${roomId}/chats/${chatId}`, reqBody);
  return res.data;
};

const useUpdateChatMutation = createMutation<Response, Variables>({
  mutationFn: updateChat,
  onSuccess: () => {
    void queryClient.invalidateQueries(useChatsInfiniteQuery.getKey());
  },
});

export default useUpdateChatMutation;
