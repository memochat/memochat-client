import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { GetMemoRooms } from '@src/shared/types/api/memoRooms';
import { memoRoomKeys } from '@src/shared/utils/queryKeys';

export const getMemoRooms = async () => {
  const res = await axios.get<GetMemoRooms['res']>(`/memo-rooms`);
  return res.data;
};

const useMemoRoomsQuery = (options?: UseQueryOptions<GetMemoRooms['res']>) =>
  useQuery(memoRoomKeys.list(), getMemoRooms, {
    staleTime: 1000 * 10,
    ...options,
  });

export default useMemoRoomsQuery;
