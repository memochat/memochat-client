import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { GetMemoRooms } from '@src/shared/types/api/memoRooms';

export const getMemoRooms = async () => {
  const res = await axios.get<GetMemoRooms['res']>(`/rooms`);
  return res.data;
};

const useMemoRoomsQuery = createQuery({
  primaryKey: '/rooms',
  queryFn: getMemoRooms,
  staleTime: 1000 * 10,
});
export default useMemoRoomsQuery;
