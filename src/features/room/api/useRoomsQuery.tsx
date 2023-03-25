import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { MemoRoom } from '@src/shared/types/memoRooms';

type Response = MemoRoom[];

export const getRooms = async () => {
  const res = await axios.get<Response>(`/rooms`);
  return res.data;
};

const useRoomsQuery = createQuery<Response>({
  primaryKey: '/rooms',
  queryFn: getRooms,
  staleTime: 1000 * 10,
});
export default useRoomsQuery;
