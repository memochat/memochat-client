import { createQuery } from 'react-query-kit';

import { MemoRoomCategoryListSchema } from '@src/schema';
import axios from '@src/shared/configs/axios';
import { MemoRoomCategory } from '@src/shared/types/memoRooms';
import { logError } from '@src/shared/utils/log';

type Response = MemoRoomCategory[];

export const getRoomCategories = async () => {
  const res = await axios.get<Response>('/rooms/categories');

  try {
    MemoRoomCategoryListSchema.parse(res.data);
  } catch (e) {
    logError(res.data);
  }
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
