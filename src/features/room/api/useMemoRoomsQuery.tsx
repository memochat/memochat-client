import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import axios from '@src/shared/configs/axios';
import { GetMemoRooms } from '@src/shared/types/api/memoRooms';
import { memoRoomKeys } from '@src/shared/utils/queryKeys';

const getMemoRooms = () => axios.get<GetMemoRooms['res']>(`/memo-rooms`);

const useMemoRoomsQuery = (options?: UseQueryOptions<AxiosResponse<GetMemoRooms['res']>>) =>
  useQuery(memoRoomKeys.list(), getMemoRooms, options);

export default useMemoRoomsQuery;
