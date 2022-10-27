import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import axios from '@src/shared/configs/axios';
import { GetMemoRoomCategories } from '@src/shared/types/api/memoRooms';
import { memoRoomCategoryKeys } from '@src/shared/utils/queryKeys';

const getMemoRoomCategories = () =>
  axios.get<GetMemoRoomCategories['res']>('/memo-rooms/categories');

const ONE_HOUR = 60 * 60 * 1000;

// TODO: 결과값 로컬 스토리지에 저장
const useMemoRoomCategoriesQuery = (
  options?: UseQueryOptions<AxiosResponse<GetMemoRoomCategories['res']>>,
) =>
  useQuery(memoRoomCategoryKeys.list(), getMemoRoomCategories, {
    staleTime: ONE_HOUR,
    cacheTime: ONE_HOUR,
    ...options,
  });

export default useMemoRoomCategoriesQuery;
