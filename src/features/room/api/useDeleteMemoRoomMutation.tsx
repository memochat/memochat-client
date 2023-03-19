import { createMutation } from 'react-query-kit';

import useMemoRoomsQuery from '@src/features/room/api/useMemoRoomsQuery';
import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';
import { DeleteMemoRooms } from '@src/shared/types/api/memoRooms';

export const deleteMemoRoom = async ({ id }: { id: number }) => {
  const res = await axios.delete<DeleteMemoRooms['res']>(`/rooms/${id}`);
  return res.data;
};

const useDeleteMemoRoomMutation = createMutation<DeleteMemoRooms['res'], { id: number }>({
  mutationFn: deleteMemoRoom,
  onSuccess: () => {
    queryClient.invalidateQueries(useMemoRoomsQuery.getKey());
  },
});
export default useDeleteMemoRoomMutation;
