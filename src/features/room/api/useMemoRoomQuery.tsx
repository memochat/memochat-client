import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { GetMemoRoom } from '@src/shared/types/api/memoRooms';

export const getMemoRoom = async ({ roomId }: { roomId: number }) => {
  const res = await axios.get<GetMemoRoom['res']>(`/rooms/${roomId}`);
  return res.data;
};

const useMemoRoomQuery = createQuery<GetMemoRoom['res'], { roomId: number }>({
  primaryKey: '/rooms/:id',
  queryFn: ({ queryKey: [, param] }) => getMemoRoom(param),
});

export default useMemoRoomQuery;
