import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { DeleteMemoRooms } from '@src/shared/types/api/memoRooms';

export const deleteMemoRoom = async ({ id }: { id: number }) => {
  const res = await axios.delete<DeleteMemoRooms['res']>(`/memo-rooms/${id}`);
  return res.data;
};

const useDeleteMemoRoomMutation = (
  options?: UseMutationOptions<DeleteMemoRooms['res'], unknown, { id: number }>,
) => {
  return useMutation(deleteMemoRoom, options);
};
export default useDeleteMemoRoomMutation;
