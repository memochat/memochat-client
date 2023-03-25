import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { MemoRoomCategory } from '@src/shared/types/memoRooms';

type Response = MemoRoomCategory[];

export const getRoomCategories = async () => {
  const res = await axios.get<Response>('/rooms/categories');
  return res.data;
};

const ONE_HOUR = 60 * 60 * 1000;

// TODO: 결과값 로컬 스토리지에 저장
const useRoomCategoriesQuery = createQuery<Response>({
  primaryKey: '/rooms/categories',
  queryFn: getRoomCategories,
  staleTime: ONE_HOUR,
  cacheTime: ONE_HOUR,
});

export default useRoomCategoriesQuery;
