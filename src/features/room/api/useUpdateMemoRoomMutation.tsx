import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { UpdateMemoRooms } from '@src/shared/types/api/memoRooms';

export const updateMemoRoom = async (id: number, param: UpdateMemoRooms['param']) => {
  const res = await axios.put<UpdateMemoRooms['res']>(`/memo-rooms/${id}`, param);
  return res.data;
};

const useUpdateMemoRoomMutation = (
  options?: UseMutationOptions<
    UpdateMemoRooms['res'],
    unknown,
    { id: number; param: UpdateMemoRooms['param'] }
  >,
) =>
  useMutation(
    ({ id, param }: { id: number; param: UpdateMemoRooms['param'] }) => updateMemoRoom(id, param),
    options,
  );

export default useUpdateMemoRoomMutation;
