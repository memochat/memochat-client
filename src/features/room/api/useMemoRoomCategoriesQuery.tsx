import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import axios from '@src/shared/configs/axios';
import { GetMemoRoomCategories } from '@src/shared/types/api/memoRooms';
import { memoRoomCategoryKeys } from '@src/shared/utils/queryKeys';

const getMemoRoomCategories = () =>
  axios.get<GetMemoRoomCategories['res']>('/memo-rooms/categories');

const useMemoRoomCategoriesQuery = (
  options?: UseQueryOptions<AxiosResponse<GetMemoRoomCategories['res']>>,
) =>
  useQuery(memoRoomCategoryKeys.list(), getMemoRoomCategories, {
    // 1주일 캐싱
    cacheTime: 7 * 24 * 60 * 60 * 1000,
    ...options,
  });

export default useMemoRoomCategoriesQuery;
