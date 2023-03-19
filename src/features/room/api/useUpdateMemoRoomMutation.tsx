import { createMutation } from 'react-query-kit';

import useMemoRoomQuery from '@src/features/room/api/useMemoRoomQuery';
import useMemoRoomsQuery from '@src/features/room/api/useMemoRoomsQuery';
import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';
import { UpdateMemoRooms } from '@src/shared/types/api/memoRooms';

export const updateMemoRoom = async ({
  roomId,
  param,
}: {
  roomId: number;
  param: UpdateMemoRooms['param'];
}) => {
  const res = await axios.put<UpdateMemoRooms['res']>(`/rooms/${roomId}`, param);
  return res.data;
};

const useUpdateMemoRoomMutation = createMutation<
  UpdateMemoRooms['res'],
  { roomId: number; param: UpdateMemoRooms['param'] }
>({
  mutationFn: updateMemoRoom,
  onSuccess: (_, { roomId }) => {
    queryClient.invalidateQueries(useMemoRoomsQuery.getKey());
    queryClient.invalidateQueries(useMemoRoomQuery.getKey({ roomId }));
  },
});

export default useUpdateMemoRoomMutation;
