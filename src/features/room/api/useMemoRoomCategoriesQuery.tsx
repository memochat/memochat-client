import { createQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { GetMemoRoomCategories } from '@src/shared/types/api/memoRooms';

export const getMemoRoomCategories = async () => {
  const res = await axios.get<GetMemoRoomCategories['res']>('/rooms/categories');
  return res.data;
};

const ONE_HOUR = 60 * 60 * 1000;

// TODO: 결과값 로컬 스토리지에 저장
const useMemoRoomCategoriesQuery = createQuery({
  primaryKey: '/rooms/categories',
  queryFn: getMemoRoomCategories,
  staleTime: ONE_HOUR,
  cacheTime: ONE_HOUR,
});

export default useMemoRoomCategoriesQuery;
