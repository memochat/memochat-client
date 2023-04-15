import queryString from 'query-string';
import { createInfiniteQuery } from 'react-query-kit';

import axios from '@src/shared/configs/axios';
import { Chat } from '@src/shared/types/chat';
import { MemoChatError } from '@src/shared/types/api';

type Response = {
  data: Chat[];
  meta: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    page: number;
    pageCount: number;
    take: number;
    total: number;
  };
};
type Variables = { roomId: number };
type Query = {
  page: number;
  take: number;
};

export const getChats = async ({ roomId, query }: Variables & { query: Query }) => {
  const res = await axios.get<Response>(
    queryString.stringifyUrl({
      url: `/rooms/${roomId}/chats`,
      query,
    }),
  );
  return res.data;
};

const take = 20;

export const useChatsInfiniteQuery = createInfiniteQuery<Response, Variables, MemoChatError>({
  primaryKey: '/rooms/:id/chats',
  queryFn: ({ queryKey: [, { roomId }], pageParam = 1 }) => {
    // pageParam || 1 : pageParam이 null인 경우 page를 1로 설정해주기 위함
    return getChats({ roomId, query: { page: pageParam || 1, take } });
  },
  getNextPageParam: (lastPage, pages) => {
    if (!lastPage.meta.hasNextPage) {
      return;
    }

    return pages.length + 1;
  },
});

export default useChatsInfiniteQuery;
