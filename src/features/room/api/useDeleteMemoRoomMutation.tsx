import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import axios from '@src/shared/configs/axios';
import { DeleteMemoRooms } from '@src/shared/types/api/memoRooms';
import { queryClient } from '@src/shared/configs/react-query';
import { memoRoomKeys } from '@src/shared/utils/queryKeys';

const deleteMemoRoom = (id: number) => axios.delete<DeleteMemoRooms['res']>(`/memo-rooms/${id}`);

const useDeleteMemoRoomMutation = (
  options?: UseMutationOptions<AxiosResponse<DeleteMemoRooms['res']>, unknown, { id: number }>,
) => {
  return useMutation({
    mutationFn: ({ id }: { id: number }) => deleteMemoRoom(id),
    onSuccess: () => {
      queryClient.invalidateQueries(memoRoomKeys.list());
    },
    ...options,
  });
};
export default useDeleteMemoRoomMutation;
