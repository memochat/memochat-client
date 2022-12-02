import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { DeleteMemoRooms } from '@src/shared/types/api/memoRooms';
import { queryClient } from '@src/shared/configs/react-query';
import { memoRoomKeys } from '@src/shared/utils/queryKeys';

export const deleteMemoRoom = async ({ id }: { id: number }) => {
  const res = await axios.delete<DeleteMemoRooms['res']>(`/memo-rooms/${id}`);
  return res.data;
};

const useDeleteMemoRoomMutation = (
  options?: UseMutationOptions<DeleteMemoRooms['res'], unknown, { id: number }>,
) => {
  return useMutation(deleteMemoRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries(memoRoomKeys.list());
    },
    ...options,
  });
};
export default useDeleteMemoRoomMutation;
