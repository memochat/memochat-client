import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { MemoRoom } from '@src/shared/types/memoRooms';

type Response = MemoRoom;
type Variables = { roomId: number };

export const getRoom = async ({ roomId }: Variables) => {
  const res = await axios.get<Response>(`/rooms/${roomId}`);
  return res.data;
};

const useRoomQuery = createQuery<Response, Variables>({
  primaryKey: '/rooms/:id',
  queryFn: ({ queryKey: [, variables] }) => getRoom(variables),
});

export default useRoomQuery;
