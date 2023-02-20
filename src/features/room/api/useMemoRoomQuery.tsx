import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import axios from '@src/shared/configs/axios';
import { GetMemoRoom } from '@src/shared/types/api/memoRooms';
import { memoRoomKeys } from '@src/shared/utils/queryKeys';

export const getMemoRoom = async (id: number) => {
  const res = await axios.get<GetMemoRoom['res']>(`/rooms/${id}`);
  return res.data;
};

const useMemoRoomQuery = (id: number, options?: UseQueryOptions<GetMemoRoom['res']>) =>
  useQuery(memoRoomKeys.detail(id), () => getMemoRoom(id), options);

export default useMemoRoomQuery;
