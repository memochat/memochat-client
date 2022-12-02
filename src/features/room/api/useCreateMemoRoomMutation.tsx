import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { CreateMemoRooms } from '@src/shared/types/api/memoRooms';
import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';
import { memoRoomKeys } from '@src/shared/utils/queryKeys';

export const createMemoRoom = async (data: CreateMemoRooms['param']) => {
  const res = await axios.post<CreateMemoRooms['res']>('/memo-rooms', data);
  return res.data;
};

const useCreateMemoRoomMutation = (
  options?: UseMutationOptions<CreateMemoRooms['res'], unknown, CreateMemoRooms['param']>,
) =>
  useMutation(createMemoRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries(memoRoomKeys.list());
    },
    ...options,
  });

export default useCreateMemoRoomMutation;
