import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import axios from '@src/shared/configs/axios';
import { UpdateMemoRooms } from '@src/shared/types/api/memoRooms';

const updateMemoRoom = (id: number, param: UpdateMemoRooms['param']) =>
  axios.put<UpdateMemoRooms['res']>(`/memo-rooms/${id}`, param);

const useUpdateMemoRoomMutation = (
  options?: UseMutationOptions<
    AxiosResponse<UpdateMemoRooms['res']>,
    unknown,
    { id: number; param: UpdateMemoRooms['param'] }
  >,
) =>
  useMutation({
    mutationFn: ({ id, param }: { id: number; param: UpdateMemoRooms['param'] }) =>
      updateMemoRoom(id, param),
    ...options,
  });

export default useUpdateMemoRoomMutation;
