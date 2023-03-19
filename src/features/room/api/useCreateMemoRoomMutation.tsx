import { createMutation } from 'react-query-kit';

import useMemoRoomsQuery from '@src/features/room/api/useMemoRoomsQuery';
import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';
import { CreateMemoRooms } from '@src/shared/types/api/memoRooms';

export const createMemoRoom = async (data: CreateMemoRooms['param']) => {
  const res = await axios.post<CreateMemoRooms['res']>('/rooms', data);
  return res.data;
};

const useCreateMemoRoomMutation = createMutation<CreateMemoRooms['res'], CreateMemoRooms['param']>({
  mutationFn: createMemoRoom,
  onSuccess: () => {
    queryClient.invalidateQueries(useMemoRoomsQuery.getKey());
  },
});

export default useCreateMemoRoomMutation;
