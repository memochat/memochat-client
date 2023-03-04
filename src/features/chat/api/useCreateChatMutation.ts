import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';
import { memoRoomKeys } from '@src/shared/utils/queryKeys';
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

const useCreateChatMutation = (
  options?: UseMutationOptions<
    CreateChat['res'],
    unknown,
    { roomId: number; param: CreateChat['param'] }
  >,
) =>
  useMutation(createChat, {
    onSuccess: () => {
      queryClient.invalidateQueries(memoRoomKeys.list());
    },
    ...options,
  });

export default useCreateChatMutation;
