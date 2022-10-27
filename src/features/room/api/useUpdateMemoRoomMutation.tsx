import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { UpdateMemoRooms } from '@src/shared/types/api/memoRooms';
import { queryClient } from '@src/shared/configs/react-query';
import { memoRoomKeys } from '@src/shared/utils/queryKeys';

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
    {
      onSuccess: () => {
        queryClient.invalidateQueries(memoRoomKeys.list());
      },
      ...options,
    },
  );

export default useUpdateMemoRoomMutation;
