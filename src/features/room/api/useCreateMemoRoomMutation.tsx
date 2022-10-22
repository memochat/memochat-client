import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { CreateMemoRooms } from '@src/shared/types/api/memoRooms';
import axios from '@src/shared/configs/axios';

export const createMemoRoom = (data: CreateMemoRooms['param']) =>
  axios.post<CreateMemoRooms['res']>('/memo-rooms', data);

const useCreateMemoRoomMutation = (
  options?: UseMutationOptions<
    AxiosResponse<CreateMemoRooms['res']>,
    unknown,
    CreateMemoRooms['param']
  >,
) =>
  useMutation({
    mutationFn: createMemoRoom,
    ...options,
  });

export default useCreateMemoRoomMutation;
