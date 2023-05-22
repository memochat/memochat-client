import { createMutation } from 'react-query-kit';

import useChatsInfiniteQuery from '@src/features/chat/api/useChatsInfiniteQuery';
import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';

type Response = string;
type Variables = {
  roomId: number;
  chatId: number;
};

export const deleteChat = async ({ roomId, chatId }: Variables) => {
  const res = await axios.delete<Response>(`/rooms/${roomId}/chats/${chatId}`);
  return res.data;
};

const useDeleteChatMutation = createMutation<Response, Variables>({
  mutationFn: deleteChat,
  onSuccess: () => {
    void queryClient.invalidateQueries(useChatsInfiniteQuery.getKey());
  },
});

export default useDeleteChatMutation;
