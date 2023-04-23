import { createQuery } from 'react-query-kit';

import { MemoRoomListSchema } from '@src/schema';
import axios from '@src/shared/configs/axios';
import { MemoRoom } from '@src/shared/types/memoRooms';
import { logError } from '@src/shared/utils/log';

type Response = MemoRoom[];

export const getRooms = async () => {
  const res = await axios.get<Response>(`/rooms`);

  try {
    MemoRoomListSchema.parse(res.data);
  } catch (e) {
    logError(e);
  }
  return res.data;
};

const useRoomsQuery = createQuery<Response>({
  primaryKey: '/rooms',
  queryFn: getRooms,
  staleTime: 1000 * 10,
});
export default useRoomsQuery;
