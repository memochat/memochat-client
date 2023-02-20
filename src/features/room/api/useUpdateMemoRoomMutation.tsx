import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { UpdateMemoRooms } from '@src/shared/types/api/memoRooms';
import { memoRoomKeys } from '@src/shared/utils/queryKeys';
import { queryClient } from '@src/shared/configs/react-query';

export const updateMemoRoom = async ({
  id,
  param,
}: {
  id: number;
  param: UpdateMemoRooms['param'];
}) => {
  const res = await axios.put<UpdateMemoRooms['res']>(`/rooms/${id}`, param);
  return res.data;
};

const useUpdateMemoRoomMutation = (
  options?: UseMutationOptions<
    UpdateMemoRooms['res'],
    unknown,
    { id: number; param: UpdateMemoRooms['param'] }
  >,
) =>
  useMutation(updateMemoRoom, {
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(memoRoomKeys.list());
      queryClient.invalidateQueries(memoRoomKeys.detail(id));
    },
    ...options,
  });

export default useUpdateMemoRoomMutation;
