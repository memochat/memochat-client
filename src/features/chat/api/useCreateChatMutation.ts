import { createMutation } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';
import useChatsInfiniteQuery from '@src/features/chat/api/useChatsInfiniteQuery';
import { Chat, ChatType } from '@src/shared/types/chat';

type Response = Chat;
type Variables = {
  roomId: number;
  payload: {
    type: ChatType;
    message: string;
    link?: string;
  };
};

export const createChat = async ({ roomId, payload }: Variables) => {
  const res = await axios.post<Response>(`/rooms/${roomId}/chats`, payload);
  return res.data;
};

const useCreateChatMutation = createMutation<Response, Variables>({
  mutationFn: createChat,
  onSuccess: () => {
    void queryClient.invalidateQueries(useChatsInfiniteQuery.getKey());
  },
});

export default useCreateChatMutation;
